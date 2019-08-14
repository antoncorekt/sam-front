package com.wipro.swagflow;

import io.swagger.models.Model;
import io.swagger.models.properties.*;
import lombok.Data;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;

/**
 * @author Anton Kozlovskyi
 * @date 13 Aug 2019
 */
@Data
public class JsFlowGenerator {

    private List<FlowEnum> enums = new ArrayList<>();
    private List<FlowType> defs = new ArrayList<>();



    public String generate(){

        StringBuilder b = new StringBuilder();

        b.append("// ----- Enums ------ \n");
        enums.stream()
                .map(x -> x.toCode())
                .forEach(b::append);
        b.append("\n// ----- Models ------\n");
        defs.stream()
                .map(x -> x.toCode())
                .forEach(b::append);

        return b.toString();
    }

    private static String removeIncorrectFlowSymbols(final String s){
        final String replString = s.replaceAll("@", "");
        return replString;
    }

    public void addModel(Map.Entry<String, Model> modelEntry){
        FlowType flowType = new FlowType();
        String typeName = modelEntry.getKey();
        flowType.setName(typeName);

        if (typeName.equals("Money")){
            System.out.println("bla");
        }

        List<FlowTypeParam> flowTypeParams = new ArrayList<>();

        for (Map.Entry<String, Property> stringPropertyEntry : modelEntry.getValue().getProperties().entrySet()) {
            System.out.println(stringPropertyEntry.getKey() + " - " + stringPropertyEntry.getValue().getName() + ":" + stringPropertyEntry.getValue().getType());

            FlowTypeParam flowTypeParam = new FlowTypeParam();

            String paramName = removeIncorrectFlowSymbols(stringPropertyEntry.getKey());
            flowTypeParam.setName(paramName);

            Property property = stringPropertyEntry.getValue();

            if (property.getType().equals("string")) {

                if (property instanceof DateTimeProperty){
                    flowTypeParam.setType("Date");
                }
                else {
                    List<String> propEnums = ((StringProperty)property).getEnum();

                    if (propEnums != null && !propEnums.isEmpty()) {
                        FlowEnum flowEnum = new FlowEnum();
                        String enumName = removeIncorrectFlowSymbols(stringPropertyEntry.getKey());
                        flowEnum.setName(typeName + enumName.substring(0,1).toUpperCase() + enumName.substring(1) + "Enum");
                        flowEnum.setParam(propEnums);
                        enums.add(flowEnum);
                        flowTypeParam.setType(flowEnum.getName());
                    }
                    else {

                        flowTypeParam.setType(stringPropertyEntry.getValue().getType());
                    }
                }

            }
            else {

                if (property.getType().equals("array")) {
                    flowTypeParam.setType("Array<" + ((RefProperty) ((ArrayProperty) property).getItems()).getSimpleRef() + ">");
                } else {
                    if (property.getType().equals("ref")) {
                        flowTypeParam.setType(((RefProperty) property).getSimpleRef());
                    }
                    else {
                        flowTypeParam.setType(stringPropertyEntry.getValue().getType());
                    }
                }
            }


            flowTypeParams.add(flowTypeParam);
        }

        flowType.setFlowClassParams(flowTypeParams);

        defs.add(flowType);

    }

}
