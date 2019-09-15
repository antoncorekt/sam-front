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

        return "\t\t\twith"+param.getName().getJsLexicalWithUpperCase() + "(" + param.toCode() + "): " + "Builder" + " { \n" +
               "\t\t\t\tthis._model."+param.getName().getJsLexical()+"="+param.getName().getJsLexical() + ";\n " +
                (lenChecker == null ? "" : "\t\t\t\t"+lenChecker+"\n") +
                "\t\t\t\treturn this;\n" +
                "\t\t\t}\n"
                ;
    }

    @Override
    public String toCode() {
        return "\tstatic get Builder() {\n" +
                "\t\tclass Builder {\n" +
                "\t\t\t _model: " + flowObjectType.getName().getJsLexicalWithUpperCase() + " = new " + flowObjectType.getName().getJsLexicalWithUpperCase() + "();\n" +
                flowObjectType.getFlowClassParams().stream().filter(Objects::nonNull).map(this::generateBuildMethod).collect(Collectors.joining("\n")) +
                "\t\t\t" + "build(){\n" +
                "\t\t\t\t" + "return this._model;\n" +
                "\t\t\t" + "}\n\t\t}\n" +
                "\t\treturn Builder;\n" +
                "\t}";
    }
}
