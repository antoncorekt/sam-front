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

    public String toCode(){
        return name + ":" + type;
    }

}
