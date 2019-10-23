package com.wipro.swagflow.flow;

import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;

/**
 * @author Anton Kozlovskyi
 * @date 13 Aug 2019
 */

public class FlowObjectType extends FlowType {

    private final List<FlowTypeParam> flowClassParams;

    private final FlowObjectInternalBuilder flowObjectInternalBuilder;

    private final FlowObjectPropClassBuilder flowObjectPropClassBuilder;

    private List<String> gettersAndSetters = new ArrayList<>();

    public FlowObjectType(JsWord name, List<FlowTypeParam> flowClassParams) {
        super(name);
        this.flowClassParams = flowClassParams;
        this.flowObjectInternalBuilder = new FlowObjectInternalBuilder(this);
        this.flowObjectPropClassBuilder = new FlowObjectPropClassBuilder(this);
    }

    public String toCode(){
        StringBuilder params = new StringBuilder();
        for (FlowTypeParam flowClassParam : flowClassParams) {
            params.append("\t");
            if (!flowClassParam.getName().isOriginalNameIsOk()) {
                params.append(flowClassParam.toCode("\"" + flowClassParam.getName().getOriginal()+"\""));
                gettersAndSetters.add("\tget " + flowClassParam.getName().getJsLexical() + "(){return this[\"" + flowClassParam.getName().getOriginal() + "\"];}");
                gettersAndSetters.add("\tset " + flowClassParam.getName().getJsLexical() + "(param: " + flowClassParam.getType() +"){this[\"" + flowClassParam.getName().getOriginal() + "\"]=param;}");
            }
            else {
                params.append(flowClassParam.toCode(flowClassParam.getName().getOriginal()));
            }

            params.append(";\n ");
        }

        return (isExported() ? "export " : "") + "class " + name.getJsLexicalWithUpperCase() + " { \n" + params +
                String.join("\n", gettersAndSetters) +
                 "\n" + flowObjectInternalBuilder.toCode() +"\n" +
                 flowObjectPropClassBuilder.toCode() +"\n" +
                "} \n";
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
