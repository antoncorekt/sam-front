package com.wipro.swagflow;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

/**
 * @author Anton Kozlovskyi
 * @date 13 Aug 2019
 */
@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class FlowTypeParam {

    String name;
    String type;
    boolean required;
    Object defaultValue;
    FlowTypeParamEnum flowTypeParamEnum;

    public String toCode(){


        return name + ":" + type + (defaultValue != null ? " = '" + defaultValue.toString() +"'" : "");
    }


    public enum FlowTypeParamEnum {
        QUERY,
        BODY,
        PATH
    }

}
