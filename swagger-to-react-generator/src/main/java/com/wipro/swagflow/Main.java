package com.wipro.swagflow;

import io.swagger.models.*;
import io.swagger.parser.SwaggerParser;

import java.util.Map;

/**
 * @author Anton Kozlovskyi
 * @date 13 Aug 2019
 */
public class Main {

    public static void main(String[] args) {
        Swagger swagger = new SwaggerParser().read("C:\\Users\\an392262\\Documents\\SolutionDesign\\Swaggers\\CBM - Customer Billing Mmgt\\CBM.customerBills.yaml");
//        Map<String, Path> paths = swagger.getPaths();
//        for (Map.Entry<String, Path> p : paths.entrySet()) {
//            Path path = p.getValue();
//            Map<HttpMethod, Operation> operations = path.getOperationMap();
//            for (Map.Entry<HttpMethod, Operation> o : operations.entrySet()) {
//                System.out.println("===");
//                System.out.println("PATH:" + p.getKey());
//                System.out.println("Http method:" + o.getKey());
//                System.out.println("Summary:" + o.getValue().getSummary());
//                System.out.println("Parameters number: " + o.getValue().getParameters().size());
//                for (Parameter parameter : o.getValue().getParameters()) {
//                    System.out.println(" - " + parameter.getName());
//                }
//                System.out.println("Responses:");
//                for (Map.Entry<String, Response> r : o.getValue().getResponses().entrySet()) {
//                    System.out.println(" - " + r.getKey() + ": " + r.getValue().getDescription());
//                }
//                System.out.println("");
//            }
//
//        }
//
//        System.out.println("------------------------ --------------------");
//
//


        JsFlowGenerator jsFlowGenerator = new JsFlowGenerator();

        for (Map.Entry<String, Model> p : swagger.getDefinitions().entrySet()) {
            jsFlowGenerator.addModel(p);
        }

        System.out.println("start");



//        jsFlowGenerator.setDefs(swagger.getDefinitions().entrySet().stream()
//                .filter(x -> x.getValue().getProperties() != null)
//            .map(x -> FlowType.builder()
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
