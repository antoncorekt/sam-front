package com.wipro.swagflow;

import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.*;

class FlowFunctionTest {

    @Test
    void parseFromString() {

        FlowFunction func =
            FlowFunction.parseFromString("const f = (id:number, k:string) => (dispatch) => (otherParam:number) => {id !== null ? return true : return false}");


        System.out.println(func.toCode());
    }
}