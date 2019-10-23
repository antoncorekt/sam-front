package com.wipro.swagflow.flow;

import com.wipro.swagflow.reduxthunk.ApiCallFunctionData;
import lombok.Getter;

import java.util.Arrays;
import java.util.stream.Collectors;

/**
 * @author Anton Kozlovskyi
 * @date 15 Sep 2019
 */
@Getter
public class JsWord {

    private final String original;
    private final String jsLexical;

    public JsWord(String original) {
        this.original = original;
        jsLexical = removeAllNonJsWordSymbols(original);
    }

    public String getJsLexicalWithUpperCase(){
        return ApiCallFunctionData.firstSymToUpperCase(jsLexical);
    }

    public static String removeAllNonJsWordSymbols(String s){
        final String correctRegex = "\\w*";

//        Pattern pattern = Pattern.compile(correctRegex);
//
//        Matcher matcher = pattern.matcher(str.replace("\n",""));

        final String incorrectSymbols = "[-@.]";

        String[] splits = s.split(incorrectSymbols);


         return ApiCallFunctionData.firstSymToLowCase(
                 Arrays.stream(splits)
                    .map(ApiCallFunctionData::firstSymToUpperCase)
                    .collect(Collectors.joining())
         );

    }

    public boolean isOriginalNameIsOk(){
        return original.equals(jsLexical);
    }

    public static JsWord from(String s){
        return new JsWord(s);
    }

    @Override
    public String toString() {
        return original;
    }
}
