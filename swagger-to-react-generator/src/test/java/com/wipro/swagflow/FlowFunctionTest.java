package com.wipro.swagflow;

import com.wipro.swagflow.flow.FlowFunction;
import org.junit.jupiter.api.Test;

class FlowFunctionTest {

    @Test
    void parseFromString() {

        FlowFunction func =
            FlowFunction.parseFromString("const f = (id:number, k:string) => (dispatch) => (otherParam:number) => {id !== null ? return true : return false}");


        System.out.println(func.toCode());
    }
}