package com.wipro.swagflow;

import com.wipro.swagflow.reduxthunk.ApiCallFunctionData;
import io.swagger.models.*;
import io.swagger.parser.SwaggerParser;
import io.swagger.v3.oas.models.OpenAPI;
import io.swagger.v3.oas.models.PathItem;
import io.swagger.v3.parser.OpenAPIV3Parser;
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

        for (ApiCallFunctionData apiCallFunctionData : jsFlowGenerator.getApiCallFunctionData()) {
            apiCallFunctionData.init();
        }

        for (Map.Entry<String, Model> p : swagger.getDefinitions().entrySet()) {
            jsFlowGenerator.addModel(p);
        }

        System.out.println("start");


        String code = jsFlowGenerator.generate();


        System.err.println(code);
    }

    @Test
    public void test23() throws IOException, URISyntaxException {

        Swagger swagger = new SwaggerParser().read("fr.yaml");

        JsFlowGenerator jsFlowGenerator = new JsFlowGenerator();

        for (Map.Entry<String, Model> p : swagger.getDefinitions().entrySet()) {
            jsFlowGenerator.addModel(p);
        }

        swagger.getPaths().entrySet().forEach(jsFlowGenerator::addApiCallFunction);


        for (ApiCallFunctionData apiCallFunctionData : jsFlowGenerator.getApiCallFunctionData()) {
            apiCallFunctionData.init();
        }

//        for (Map.Entry<String, Model> p : swagger.getDefinitions().entrySet()) {
//            jsFlowGenerator.addModel(p);
//        }




        System.out.println("start");


        jsFlowGenerator.generateFiles();

    }

    @Test
    public void testOpenApi() throws IOException, URISyntaxException {


        OpenAPI openAPI = new OpenAPIV3Parser().read("test.yaml");

        JsFlowGenerator jsFlowGenerator = new JsFlowGenerator();

        for (Map.Entry<String, PathItem> stringPathItemEntry : openAPI.getPaths().entrySet()) {

            PathItem pathItem = stringPathItemEntry.getValue();

            String pathName = (String) stringPathItemEntry.getKey();

        }

//        swagger.getPaths().entrySet().forEach(jsFlowGenerator::addApiCallFunction);

//        for (ApiCallFunctionData apiCallFunctionData : jsFlowGenerator.getApiCallFunctionData()) {
//            apiCallFunctionData.init();
//        }
//
//        for (Map.Entry<String, Model> p : swagger.getDefinitions().entrySet()) {
//            jsFlowGenerator.addModel(p);
//        }

        System.out.println("start");


        jsFlowGenerator.generateFiles();

    }

}
