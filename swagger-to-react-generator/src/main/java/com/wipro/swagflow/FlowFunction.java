package com.wipro.swagflow;

import lombok.Data;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.Collections;
import java.util.List;
import java.util.stream.Collectors;

/**
 * @author Anton Kozlovskyi
 * @date 20 Aug 2019
 */
@Data
public class FlowFunction extends FlowType {

    private String body="";
    private List<FlowTypeParam> params = new ArrayList<>();
    private FlowTypeParam returnParam;

    public FlowFunction(String name) {
        super(name);
    }

    @Override
    public Types getType() {
        return Types.Function;
    }

    @Override
    public String toCode() {
        return "const " + name + " = (" + params.stream().map(FlowTypeParam::toCode).collect(Collectors.joining(","))
                + ")" + (returnParam == null ? "" : ":"+returnParam.toCode()) + " =>  {\n" + body + " \n}\n";
    }

    public static FlowFunction parseFromString(String str){
        FlowFunction res = new FlowFunction(str.substring(str.indexOf("const ") + 6, str.indexOf("=")).replace(" ", ""));
        String[] params = str.substring(str.indexOf("(") + 1, str.indexOf(")")).split(",");
        for (String param : params) {
            FlowTypeParam flowTypeParam = new FlowTypeParam();
            if (param.contains(":")){
                flowTypeParam.setName(param.substring(0, param.indexOf(":")));
                flowTypeParam.setType(param.substring(param.indexOf(":")+1));
            }
            else {
                flowTypeParam.setName(param);
            }
            res.getParams().add(flowTypeParam);
        }
        res.setBody(str.substring(str.indexOf("{")+1, str.lastIndexOf("}")));
        return res;
    }
}
