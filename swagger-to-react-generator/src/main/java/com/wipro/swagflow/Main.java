package com.wipro.swagflow;

import io.swagger.models.*;
import io.swagger.models.parameters.Parameter;
import io.swagger.parser.SwaggerParser;

import java.io.IOException;
import java.net.URISyntaxException;
import java.util.Map;

/**
 * @author Anton Kozlovskyi
 * @date 13 Aug 2019
 */
public class Main {

    public static void main(String[] args) throws IOException, URISyntaxException {
        Swagger swagger = new SwaggerParser().read("C:\\Users\\an392262\\Documents\\SolutionDesign\\Swaggers\\CBM - Customer Billing Mmgt\\CBM.customerBills.yaml");


        System.out.println("------------------------ --------------------");




        JsFlowGenerator jsFlowGenerator = new JsFlowGenerator();

        for (Map.Entry<String, Model> p : swagger.getDefinitions().entrySet()) {
            jsFlowGenerator.addModel(p);
        }

        System.out.println("start");



//        jsFlowGenerator.setModels(swagger.getDefinitions().entrySet().stream()
//                .filter(x -> x.getValue().getProperties() != null)
//            .map(x -> FlowObjectType.builder()
//                            .flowClassParams(x.getValue().getProperties().entrySet().stream()
//                                    .map(prop -> FlowTypeParam.builder()
//                                            .name(prop.getKey())
//                                            .type(prop.getValue().getType())
//                                            .build())
//                                    .collect(Collectors.toList()))
//                            .name(x.getKey())
//                            .build()
//            )
//                .collect(Collectors.toList())
//
//        );

        System.err.println(jsFlowGenerator.generate());

    }




}
