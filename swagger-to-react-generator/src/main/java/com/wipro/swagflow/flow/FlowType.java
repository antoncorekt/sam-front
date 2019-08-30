package com.wipro.swagflow.flow;

import lombok.Data;

/**
 * @author Anton Kozlovskyi
 * @date 20 Aug 2019
 */
@Data
public abstract class FlowType implements FlowElement {

    protected String name;

    protected boolean exported = true;

    public FlowType(String name) {
        this.name = name;
    }

    public enum Types {
        Object,
        Array,
        String,
        Function,
        Number
    }

    public abstract Types getType();

}
