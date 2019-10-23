package com.wipro.swagflow.flow;

import java.util.Objects;
import java.util.stream.Collectors;

/**
 * @author Anton Kozlovskyi
 * @date 27 Aug 2019
 */
public class FlowObjectInternalBuilder implements FlowElement {

    private final FlowObjectType flowObjectType;

    public FlowObjectInternalBuilder(FlowObjectType flowObjectType) {
        this.flowObjectType = flowObjectType;
    }

    private String generateBuildMethod(FlowTypeParam param) {

        String lenChecker = null;
        if ( param.getMaxLen() != null && param.getMaxLen()>0){
            lenChecker = "if (" + param.getName().getJsLexical()+ " !== null && " + param.getName().getJsLexical() + ".length>" + param.getMaxLen() + ") throw new Error(`Data param error. Parameter " + param.getName() + " < " +param.getMaxLen() +".`);";
        }

        return "with"+param.getName().getJsLexicalWithUpperCase() + "(" + param.toCode() + "): " + "Builder" + " { " +
                "this._model."+param.getName().getJsLexical()+"="+param.getName().getJsLexical() + "; " +
                (lenChecker == null ? "" : ""+lenChecker+"") +
                "return this;" +
                "}"
                ;
    }

    @Override
    public String toCode() {

        return "\tstatic get Builder() {" +
                "class Builder {" +
                " _model: " + flowObjectType.getName().getJsLexicalWithUpperCase() + " = new " + flowObjectType.getName().getJsLexicalWithUpperCase() + "();" +
                flowObjectType.getFlowClassParams().stream().filter(Objects::nonNull).map(this::generateBuildMethod).collect(Collectors.joining("")) +
                "" + "build(){" +
                "" + "return this._model;" +
                "" + "}}" +
                "return Builder;" +
                "}";
    }
}
