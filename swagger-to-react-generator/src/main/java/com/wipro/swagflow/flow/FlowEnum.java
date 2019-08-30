package com.wipro.swagflow.flow;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;
import java.util.stream.Collectors;

/**
 * @author Anton Kozlovskyi
 * @date 14 Aug 2019
 */
@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class FlowEnum implements FlowElement{

    String name;
    List<String> param;

    @Override
    public String toCode() {
        return "class " + name + " {\n " +
                param.stream().map(flowEnumParam ->  "\t static get " + flowEnumParam.toUpperCase() + "(){ return '" + flowEnumParam + "'; }").collect(Collectors.joining("\n")) + "\n}\n";
    }
}
