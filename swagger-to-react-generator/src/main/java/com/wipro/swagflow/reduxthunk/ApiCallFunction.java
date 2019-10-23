package com.wipro.swagflow.reduxthunk;

import com.wipro.swagflow.flow.FlowElement;
import com.wipro.swagflow.flow.FlowFunction;
import com.wipro.swagflow.flow.FlowTypeParam;
import com.wipro.swagflow.flow.JsWord;
import lombok.Data;
import org.apache.commons.lang3.StringUtils;

import java.io.IOException;
import java.net.URISyntaxException;
import java.util.concurrent.atomic.AtomicReference;
import java.util.regex.Matcher;
import java.util.regex.Pattern;
import java.util.stream.Collectors;

import static com.wipro.swagflow.reduxthunk.ApiCallFunctionData.*;

/**
 * @author Anton Kozlovskyi
 * @date 20 Aug 2019
 */
@Data
public class ApiCallFunction extends FlowFunction {

    private final ApiCallFunctionData apiCallFunctionData;

    private final ReduxThunkCallApi reduxThunkCallApi;

    public ApiCallFunction(String name, ApiCallFunctionData apiCallFunctionData) throws IOException, URISyntaxException {
        super(JsWord.from(name));
        this.apiCallFunctionData = apiCallFunctionData;
        reduxThunkCallApi = new ReduxThunkCallApi(new FetchFunction());
    }


    public void bodyInit(){


        AtomicReference<String> body = new AtomicReference<>("undefined");
        AtomicReference<String> bodyType = new AtomicReference<>("any");

        apiCallFunctionData.getParams().stream()
                .filter(param -> param.getFlowTypeParamEnum().equals(FlowTypeParam.FlowTypeParamEnum.BODY))
                .findFirst()
                .ifPresent(param -> {
                    body.set(param.getName().getJsLexical());
                    bodyType.set(param.getType());
                });


        setBody(
                "\tconst settings = {" +
                        "\t\t// set settings data\n" +
                        "\t\turl:"  + this.buildUrl("") + ",\n" +
                        "\t\tcontentType:'"  + apiCallFunctionData.getContentType() + "',\n" +
                        "\t\thttpMethod: '" + apiCallFunctionData.getMethod() + "',\n" +
                        "\t\tbody:" + (body.get().equals("undefined") || !apiCallFunctionData.getContentType().contains("json") ? body : "JSON.stringify("+ body + ")") +",\n" +
                        "\t\trequestType: ACT."+ apiCallFunctionData.getActionRequestName() + ",\n" +
                        "\t\tsuccessType: ACT."+ apiCallFunctionData.getActionBaseName() + ACTION_SUCCESS_MARKER +  ",\n" +
                        "\t\tfailType: ACT."+ apiCallFunctionData.getActionBaseName() + ACTION_FAIL_MARKER + "\n" +
                 "\t};\n\t" +
                 "return " + reduxThunkCallApi.getName() + "(settings);"
        );
    }

    public String buildUrl(String url){

        String res = apiCallFunctionData.getPath().replace("{", "${");

        Pattern pattern = Pattern.compile("(\\$\\{.*})");

        Matcher matcher = pattern.matcher(res);

        if (matcher.find()) {
            for (int i = 0; i < matcher.groupCount(); i++) {
                JsWord jsWord = JsWord.from(matcher.group(i));

                if (!jsWord.isOriginalNameIsOk()){
                    res = res.replace(jsWord.getOriginal(),jsWord.getJsLexical());
                }
            }
        }

        final String params = apiCallFunctionData.getParams().stream()
                .filter(param -> FlowTypeParam.FlowTypeParamEnum.QUERY.equals(param.getFlowTypeParamEnum()))
                .map(param -> param.getName() + "=${" + param.getName().getJsLexical() + "}")
                .collect(Collectors.joining("&"));

        return "`" + res + (StringUtils.isEmpty(params)? "" : "?") + params + "`";
    }

    @Override
    public String toCode() {
        return  "// call " + this.apiCallFunctionData.getSummary() + "\n" +
                super.toCode() +"\n";
    }
}
