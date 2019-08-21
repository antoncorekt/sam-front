package com.wipro.swagflow.reduxthunk;

import org.junit.jupiter.api.Test;

import java.io.IOException;
import java.net.URISyntaxException;

import static org.junit.jupiter.api.Assertions.*;

class FetchFunctionTest {

    @Test
    void toCode() throws IOException, URISyntaxException {

        FetchFunction fetchFunction = new FetchFunction();


        System.out.println(fetchFunction.toCode());
    }
}