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
@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class FlowType {

    String name;
    List<FlowTypeParam> flowClassParams = new ArrayList<>();

    public String toCode(){
        StringBuilder params = new StringBuilder();
        for (FlowTypeParam flowClassParam : flowClassParams) {
            params.append(flowClassParam.toCode()).append("; ");
        }

        return "class " + name + " { " + params + " } \n";
    }

//    public enum Type {
//        String("string")
//    }

}
