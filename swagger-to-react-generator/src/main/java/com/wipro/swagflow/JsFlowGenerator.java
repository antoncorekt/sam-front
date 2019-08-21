package com.wipro.swagflow;

import com.wipro.swagflow.reduxthunk.ApiCallGeneralFunctions;
import io.swagger.models.*;
import io.swagger.models.parameters.BodyParameter;
import io.swagger.models.parameters.Parameter;
import io.swagger.models.parameters.PathParameter;
import io.swagger.models.parameters.QueryParameter;
import io.swagger.models.properties.*;
import lombok.Data;

import java.io.IOException;
import java.net.URISyntaxException;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

/**
 * @author Anton Kozlovskyi
 * @date 13 Aug 2019
 */
@Data
public class JsFlowGenerator {

    private List<FlowEnum> enums = new ArrayList<>();
    private List<FlowType> models = new ArrayList<>();

    private ApiCallGeneralFunctions apiCallGeneralFunctions = new ApiCallGeneralFunctions();

    private List<ApiCallFunctionData> apiCallFunctionData = new ArrayList<>();

    public JsFlowGenerator() throws IOException, URISyntaxException {
    }

    private void addToStringBuilder(List<? extends FlowElement> elements, StringBuilder builder, String firstLine){
        if (!elements.isEmpty()){
            builder.append(firstLine);
            elements.stream()
                    .map(FlowElement::toCode)
                    .forEach(builder::append);
        }
    }

    public String generate() {

        StringBuilder b = new StringBuilder();

        addToStringBuilder(enums, b, "\n// ----- Enums ------\n");
        addToStringBuilder(models, b, "\n// ----- Models ------\n");

        b.append("\n// general components for function\n");
        b.append(apiCallGeneralFunctions.toCode());
        b.append("\n// functions\n");
        for (ApiCallFunctionData apiCallFunctionDatum : apiCallFunctionData) {
            b.append(apiCallFunctionDatum.getApiCallFunction().toCode()).append("\n");
        }

        return b.toString();
    }

    private static String removeIncorrectFlowSymbols(final String s){
        return s.replaceAll("@", "");
    }

    public void addApiCallFunction(Map.Entry<String, Path> pathEntry){

        ApiCallFunctionData apiCallFunctionData = new ApiCallFunctionData();

        Path path = pathEntry.getValue();
        Map<HttpMethod, Operation> operations = path.getOperationMap();

        for (Map.Entry<HttpMethod, Operation> o : operations.entrySet()) {
            apiCallFunctionData.setMethod(o.getKey());
            apiCallFunctionData.setPath(pathEntry.getKey());
            apiCallFunctionData.setSummary(o.getValue().getSummary());
            List<FlowTypeParam> flowTypeParams = new ArrayList<>();
            for (Parameter parameter : o.getValue().getParameters()) {

                if (parameter instanceof QueryParameter){
                    flowTypeParams.add(FlowTypeParam.builder()
                            .name(parameter.getName())
                            .required(parameter.getRequired())
                            .flowTypeParamEnum(FlowTypeParam.FlowTypeParamEnum.QUERY)
                            .defaultValue(((QueryParameter) parameter).getDefaultValue())
                            .type((((QueryParameter) parameter).getType()))
                            .build());
                    continue;
                }

                if (parameter instanceof PathParameter){
                    flowTypeParams.add(FlowTypeParam.builder()
                            .name(parameter.getName())
                            .required(parameter.getRequired())
                            .defaultValue(((PathParameter) parameter).getDefaultValue())
                            .flowTypeParamEnum(FlowTypeParam.FlowTypeParamEnum.PATH)
                            .type((((PathParameter) parameter).getType()))
                            .build());
                    continue;
                }

                if (parameter instanceof BodyParameter){

                    flowTypeParams.add(FlowTypeParam.builder()
                            .name(parameter.getName())
                            .required(parameter.getRequired())
                            .type(((RefModel)((BodyParameter) parameter).getSchema()).getSimpleRef())
                            .build());

                    continue;
                }



            }
            apiCallFunctionData.setParams(flowTypeParams);


            Map<String,Response> flowTypes = new HashMap<>();
            for (Map.Entry<String, Response> r : o.getValue().getResponses().entrySet()) {
                flowTypes.put(r.getKey(), r.getValue());
            }
            apiCallFunctionData.setResponses(flowTypes);
        }

        this.apiCallFunctionData.add(apiCallFunctionData);

    }

    public void addModel(Map.Entry<String, Model> modelEntry){

        String typeName = modelEntry.getKey();


        if (typeName.equals("Money")){
            System.out.println("bla");
        }

        List<FlowTypeParam> flowTypeParams = new ArrayList<>();

        if (modelEntry.getValue().getProperties() == null){
            Model model = modelEntry.getValue();
            if (model instanceof ArrayModel && ((ArrayModel)model).getType().equals("array"))
                models.add(new FlowArrayType(((RefProperty) ((ArrayModel) model).getItems()).getSimpleRef(), typeName));

            return;
        }


        for (Map.Entry<String, Property> stringPropertyEntry : modelEntry.getValue().getProperties().entrySet()) {
            FlowTypeParam flowTypeParam = new FlowTypeParam();

            String paramName = removeIncorrectFlowSymbols(stringPropertyEntry.getKey());
            flowTypeParam.setName(paramName);

            Property property = stringPropertyEntry.getValue();

            if (property.getType().equals("string")) {

                if (property instanceof DateTimeProperty || property instanceof DateProperty){
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

        models.add(new FlowObjectType(typeName, flowTypeParams));

    }

}
