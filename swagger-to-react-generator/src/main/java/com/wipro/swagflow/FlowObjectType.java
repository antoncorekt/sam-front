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

    List<FlowTypeParam> flowClassParams = new ArrayList<>();

    public FlowObjectType(String name, List<FlowTypeParam> flowClassParams) {
        super(name);
        this.flowClassParams = flowClassParams;
    }

    public String toCode(){
        StringBuilder params = new StringBuilder();
        for (FlowTypeParam flowClassParam : flowClassParams) {
            params.append(flowClassParam.toCode()).append("; ");
        }

        return "class " + name + " { " + params + " } \n";
    }

    @Override
    public Types getType() {
        return Types.Object;
    }

    //    public enum Type {
//        String("string")
//    }

}
