package com.wipro.swagflow.flow;

import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.*;

class JsWordUnitTest {

    @Test
    void removeAllNonJsWordSymbols() {

        JsWord jsWord = new JsWord("x");
        assertEquals(jsWord.getOriginal(), jsWord.getJsLexical());

        JsWord jsWord1 = new JsWord("x123");
        assertEquals(jsWord1.getOriginal(), jsWord1.getJsLexical());

        JsWord jsWord2 = new JsWord("testMy-function");
        System.out.println(jsWord2.getOriginal());
        System.out.println(jsWord2.getJsLexical());

    }
}