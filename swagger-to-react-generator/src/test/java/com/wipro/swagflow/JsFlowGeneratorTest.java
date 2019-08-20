package com.wipro.swagflow;

import com.fasterxml.jackson.annotation.JsonIgnore;
import io.swagger.models.*;
import io.swagger.models.parameters.Parameter;
import io.swagger.parser.SwaggerParser;
import org.junit.jupiter.api.Test;

import java.util.Map;

/**
 * @author Anton Kozlovskyi
 * @date 20 Aug 2019
 */
public class JsFlowGeneratorTest {

    @Test
    public void test(){

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

}
