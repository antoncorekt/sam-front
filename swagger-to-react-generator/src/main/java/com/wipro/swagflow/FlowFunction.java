package com.wipro.swagflow;

import com.wipro.swagflow.reduxthunk.ApiCallFunction;
import lombok.Data;
import org.apache.commons.lang3.StringUtils;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.Collections;
import java.util.List;
import java.util.regex.Matcher;
import java.util.regex.Pattern;
import java.util.stream.Collectors;

/**
 * @author Anton Kozlovskyi
 * @date 20 Aug 2019
 */
@Data
public class FlowFunction extends FlowType {

    private String body="";

    private FlowTypeParam returnParam;
    private List<List<FlowTypeParam>> funcAdditionalParam = new ArrayList<>();

    public FlowFunction(String name) {
        super(name);
    }

    @Override
    public Types getType() {
        return Types.Function;
    }

    @Override
    public String toCode() {

        String funcParam = funcAdditionalParam.stream()
                .map(paramList ->
                        "("+paramList.stream().map(FlowTypeParam::toCode).collect(Collectors.joining(","))+")"
                )
                .collect(Collectors.joining("=>"));

        if (funcParam.equals("")) funcParam = "()";

//        return "const " + name + " = (" + params.stream().map(FlowTypeParam::toCode).collect(Collectors.joining(","))
//                + ")" + (returnParam == null ? "" : ":"+returnParam.toCode()) + " => " + funcParam + " {\n" + body + " \n}\n";
        return "const " + name + " = " + funcParam + " => {\n" + body + " \n};\n";
    }


    public static FlowFunction parseFromString(String str){

        Pattern pattern = Pattern.compile("const (\\w.)+\\s*=+\\s*(\\(.*\\))+\\s*=>+\\s*(.*)\\{.*};?$");
//        Pattern pattern = Pattern.compile("const (\w.)+\s*=+\s*(\(.+\))+\s*=>+\s*(.*)\{(.|\n)*}");

        Matcher matcher = pattern.matcher(str.replace("\n",""));

        if (matcher.find()) {

            String group = matcher.group(0);
            String group1 = matcher.group(1);
            String group2 = matcher.group(2);
            String group3 = matcher.group(3);


            FlowFunction res = new FlowFunction(group.substring(6, group.indexOf("=")).replace(" ", ""));

            String[] funcParams = group2.split("=>");

            for (int i = 0; i < funcParams.length; i++) {
                String[] params = funcParams[i].replaceAll("\\(|\\)", "").split(",");

                List<FlowTypeParam> flowTypeParams = new ArrayList<>();
                for (String param : params) {
                    FlowTypeParam flowTypeParam = new FlowTypeParam();
                    if (StringUtils.isEmpty(param)) continue;
                    if (param.contains(":")) {
                        flowTypeParam.setName(param.substring(0, param.indexOf(":")));
                        if (param.equals("integer") || param.equals("float") || param.equals("double")){
                            flowTypeParam.setType("number");
                        }
                        else {
                            flowTypeParam.setType(param.substring(param.indexOf(":") + 1));
                        }
                    } else {
                        flowTypeParam.setName(param);
                    }
                    flowTypeParams.add(flowTypeParam);
                }
                res.funcAdditionalParam.add(flowTypeParams);
            }


            res.setBody(str.substring(str.indexOf("{")+1, str.lastIndexOf("}")));
            return res;
        }

        else {
            throw new RuntimeException("Not match for pattern: " + pattern.pattern() + "; str: " + str);
        }

    }


}
