package com.wipro.swagflow.flow;

import java.util.Objects;
import java.util.stream.Collectors;

/**
 * @author Anton Kozlovskyi
 * @date 10 Oct 2019
 */
public class FlowObjectPropClassBuilder implements FlowElement  {

    private final FlowObjectType flowObjectType;

    public FlowObjectPropClassBuilder(FlowObjectType flowObjectType) {
        this.flowObjectType = flowObjectType;
    }

    private String generateBuildMethod(FlowTypeParam param) {

        return "static get " + param.getName().getJsLexical() + "() { return '"+param.getName().getJsLexical()+"';} ";
    }

    @Override
    public String toCode() {

        return "\tstatic get ObjectProps() {" +
                "class ObjectProps {" +
                flowObjectType.getFlowClassParams().stream()
                        .filter(Objects::nonNull)
                        .map(this::generateBuildMethod)
                        .collect(Collectors.joining("")) +
                "} return ObjectProps;}";
    }
}
