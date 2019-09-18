package com.wipro.swagflow.flow;

import com.google.common.collect.Lists;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.Arrays;
import java.util.Collections;
import java.util.List;
import java.util.Objects;
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
        return "export class " + name + " {\n " +
                param.stream().map(flowEnumParam ->  "\t static get " + flowEnumParam.toUpperCase() + "(){ return '" + flowEnumParam + "'; }").collect(Collectors.joining("\n")) + "\n}\n";
    }

    public boolean isParamEquals(List<String> params){
        Collections.sort(params);
        Collections.sort(param);
       return params.equals(param);
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        FlowEnum flowEnum = (FlowEnum) o;

        return Objects.equals(name, flowEnum.name) &&
                Arrays.equals(param.toArray(), flowEnum.param.toArray());
    }

    @Override
    public int hashCode() {
        return Objects.hash(name, param);
    }
}
