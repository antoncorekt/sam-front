package com.wipro.swagflow;

import com.fasterxml.jackson.annotation.JsonIgnore;
import io.swagger.models.*;
import io.swagger.models.parameters.Parameter;
import io.swagger.parser.SwaggerParser;
import org.junit.jupiter.api.Test;

import java.io.IOException;
import java.net.URISyntaxException;
import java.util.Map;

/**
 * @author Anton Kozlovskyi
 * @date 20 Aug 2019
 */
public class JsFlowGeneratorTest {

    @Test
    public void test() throws IOException, URISyntaxException {

        Swagger swagger = new SwaggerParser().read("test.yaml");

        JsFlowGenerator jsFlowGenerator = new JsFlowGenerator();

        swagger.getPaths().entrySet().forEach(jsFlowGenerator::addApiCallFunction);

        for (Map.Entry<String, Model> p : swagger.getDefinitions().entrySet()) {
            jsFlowGenerator.addModel(p);
        }

        System.out.println("start");


        String code = jsFlowGenerator.generate();


        System.err.println(code);
    }

    @Test
    public void test2() throws IOException, URISyntaxException {

        Swagger swagger = new SwaggerParser().read("C:\\Users\\an392262\\Documents\\sam-app\\swagger\\sam_api.yaml");

        JsFlowGenerator jsFlowGenerator = new JsFlowGenerator();

        swagger.getPaths().entrySet().forEach(jsFlowGenerator::addApiCallFunction);

        jsFlowGenerator.getApiCallFunctionData().forEach(ApiCallFunctionData::init);

        for (Map.Entry<String, Model> p : swagger.getDefinitions().entrySet()) {
            jsFlowGenerator.addModel(p);
        }

        System.out.println("start");


        String code = jsFlowGenerator.generate();


        System.err.println(code);
    }

}
