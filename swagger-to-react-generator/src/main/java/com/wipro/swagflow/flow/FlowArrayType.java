package com.wipro.swagflow.flow;

/**
 * @author Anton Kozlovskyi
 * @date 20 Aug 2019
 */

public class FlowArrayType extends FlowType {

    private String arrayName;

    public FlowArrayType(JsWord name, String arrayName) {
        super(name);
        this.arrayName = arrayName;
    }

    @Override
    public Types getType() {
        return Types.Array;
    }

    @Override
    public String toCode() {
        if (arrayName == null){
            throw new RuntimeException("Not found type for array " + name);
        }

        return "const " + arrayName + "Var: Array<" + name + ">; // example usage of type " + arrayName + "\n";
    }
}
