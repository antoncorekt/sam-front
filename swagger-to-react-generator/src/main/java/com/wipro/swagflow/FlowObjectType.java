package com.wipro.swagflow;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.ArrayList;
import java.util.List;

/**
 * @author Anton Kozlovskyi
 * @date 13 Aug 2019
 */

public class FlowObjectType extends FlowType {

    private final List<FlowTypeParam> flowClassParams;

    private final FlowObjectInternalBuilder flowObjectInternalBuilder;

    public FlowObjectType(String name, List<FlowTypeParam> flowClassParams) {
        super(name);
        this.flowClassParams = flowClassParams;
        this.flowObjectInternalBuilder = new FlowObjectInternalBuilder(this);
    }

    public String toCode(){
        StringBuilder params = new StringBuilder();
        for (FlowTypeParam flowClassParam : flowClassParams) {
            params.append("\t").append(flowClassParam.toCode()).append(";\n ");
        }

        return (isExported() ? "export " : "") + "class " + name + " { \n" + params +

                 "\n" + flowObjectInternalBuilder.toCode() +"\n } \n";
    }

    public List<FlowTypeParam> getFlowClassParams() {
        return flowClassParams;
    }

    @Override
    public Types getType() {
        return Types.Object;
    }

    //    public enum Type {
//        String("string")
//    }

}
