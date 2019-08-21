package com.wipro.swagflow.reduxthunk;

import com.sun.xml.internal.ws.api.pipe.helper.AbstractFilterPipeImpl;
import com.wipro.swagflow.ApiCallFunctionData;
import com.wipro.swagflow.FlowFunction;
import com.wipro.swagflow.FlowTypeParam;
import lombok.Data;
import org.apache.commons.lang3.StringUtils;

import java.io.IOException;
import java.net.URISyntaxException;
import java.util.stream.Collectors;

/**
 * @author Anton Kozlovskyi
 * @date 20 Aug 2019
 */
@Data
public class ApiCallFunction extends FlowFunction {

    private ApiCallFunctionData apiCallFunctionData;



    public ApiCallFunction(String name, ApiCallFunctionData apiCallFunctionData){
        super(name);
        this.apiCallFunctionData = apiCallFunctionData;
    }


    public String buildUrl(String url){

        String res = apiCallFunctionData.getPath().replace("{", "${");

        final String params = apiCallFunctionData.getParams().stream()
                .filter(param -> FlowTypeParam.FlowTypeParamEnum.QUERY.equals(param.getFlowTypeParamEnum()))
                .map(param -> param.getName() + "=${" + param.getName() + "}")
                .collect(Collectors.joining("&"));

        return "`" + res + (StringUtils.isEmpty(params)? "" : "?") + params + "`";
    }

    @Override
    public String toCode() {
        return  "// call " + this.apiCallFunctionData.getMethod() + " " + this.buildUrl("http://host:port") + "\n" +
                super.toCode();
    }
}
