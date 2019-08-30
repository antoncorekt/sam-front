package com.wipro.swagflow.flow;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

/**
 * @author Anton Kozlovskyi
 * @date 13 Aug 2019
 */
@Data
@NoArgsConstructor
@AllArgsConstructor
public class FlowTypeParam {

    String name;
    String type;
    String description;
    Integer maxLen;
    boolean required;
    Object defaultValue;
    FlowTypeParamEnum flowTypeParamEnum;

    public static FlowTypeParamBuilder builder() {
        return new FlowTypeParamBuilder();
    }

    public String toCode(){


        return name + (type == null ? "" :  ":" + type) + (defaultValue != null ? " = '" + defaultValue.toString() +"'" : "");
    }


    public enum FlowTypeParamEnum {
        QUERY,
        BODY,
        PATH
    }

    public static class FlowTypeParamBuilder {
        private String name;
        private String type;
        private String description;
        private Integer maxLen;
        private boolean required;
        private Object defaultValue;
        private FlowTypeParamEnum flowTypeParamEnum;

        FlowTypeParamBuilder() {
        }

        public FlowTypeParamBuilder name(String name) {
            this.name = name;
            return this;
        }

        public FlowTypeParamBuilder description(String description) {
            this.description = description;
            return this;
        }
        public FlowTypeParamBuilder maxLen(Integer maxLen) {
            this.maxLen = maxLen;
            return this;
        }

        public FlowTypeParamBuilder type(String type) {
            if (type.equals("integer") || type.equals("float") || type.equals("double")){
                this.type = "number";
            }
            else {
                this.type = type;
            }
            return this;
        }

        public FlowTypeParamBuilder required(boolean required) {
            this.required = required;
            return this;
        }

        public FlowTypeParamBuilder defaultValue(Object defaultValue) {
            this.defaultValue = defaultValue;
            return this;
        }

        public FlowTypeParamBuilder flowTypeParamEnum(FlowTypeParamEnum flowTypeParamEnum) {
            this.flowTypeParamEnum = flowTypeParamEnum;
            return this;
        }

        public FlowTypeParam build() {
            return new FlowTypeParam(name, type, description, maxLen, required, defaultValue, flowTypeParamEnum);
        }

        public String toString() {
            return "FlowTypeParam.FlowTypeParamBuilder(name=" + this.name + ", type=" + this.type + ", required=" + this.required + ", defaultValue=" + this.defaultValue + ", flowTypeParamEnum=" + this.flowTypeParamEnum + ")";
        }
    }
}
