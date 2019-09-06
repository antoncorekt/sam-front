package com.wipro.swagflow;

import com.wipro.swagflow.files.AbstractJsFile;
import com.wipro.swagflow.files.JsCodeFile;
import com.wipro.swagflow.flow.*;
import com.wipro.swagflow.reduxthunk.ApiCallFunction;
import com.wipro.swagflow.reduxthunk.ApiCallFunctionData;
import com.wipro.swagflow.reduxthunk.ApiCallGeneralFunctions;
import io.swagger.models.*;
import io.swagger.models.parameters.BodyParameter;
import io.swagger.models.parameters.Parameter;
import io.swagger.models.parameters.PathParameter;
import io.swagger.models.parameters.QueryParameter;
import io.swagger.models.properties.*;
import io.swagger.v3.oas.models.PathItem;
import lombok.Data;

import java.io.IOException;
import java.net.URISyntaxException;
import java.util.*;
import java.util.function.Function;
import java.util.stream.Collectors;

import static java.util.Comparator.comparing;

/**
 * @author Anton Kozlovskyi
 * @date 13 Aug 2019
 */
@Data
public class JsFlowGenerator {

    private final JsCodeFile actionsFile;
    private final JsCodeFile modelsFile;
    private final JsCodeFile apiFuncFile;
    private final JsCodeFile handlers;

    private List<FlowEnum> enums = new ArrayList<>();
    private List<FlowType> models = new ArrayList<>();

    private ApiCallGeneralFunctions apiCallGeneralFunctions = new ApiCallGeneralFunctions();

    private List<ApiCallFunctionData> apiCallFunctionData = new ArrayList<>();
    private Map<String, FlowFunction> additionalFetchFunction = new HashMap<>();

    private FlowElement exporter;
    private FlowElement importer = () -> "import {BACKEND_URL} from './conf';";

    public JsFlowGenerator() throws IOException, URISyntaxException {
        actionsFile = new JsCodeFile("api-actions-defs.js", "generated/");
        modelsFile = new JsCodeFile("api-models.js", "generated/");
        apiFuncFile = new JsCodeFile("api-func.js", "generated/");
        handlers = new JsCodeFile("api-handlers.js", "generated/");
    }

    private void addToStringBuilder(List<? extends FlowElement> elements, StringBuilder builder, String firstLine){
        if (!elements.isEmpty()){
            builder.append(firstLine);
            elements.stream()
                    .map(FlowElement::toCode)
                    .forEach(builder::append);
        }
    }

    public void generateFiles(){

        apiCallFunctionData
                .forEach(x->{
                    actionsFile.addElement(x.getActionsCode());
                    if (x.getQueryParametersClass() != null)
                        models.add(x.getQueryParametersClass());
                    handlers.addElement(x.getReducerHandler());
                });

        modelsFile.addElement("\n// ----- Enums ------\n");
        modelsFile.addElement(enums);
        modelsFile.addElement("\n// ----- Models ------\n");
        modelsFile.addElement(models);

        apiCallFunctionData.sort(comparing(ApiCallFunctionData::getMethod));
        for (ApiCallFunctionData apiCallFunctionDatum : apiCallFunctionData) {
            apiFuncFile.addElement(apiCallFunctionDatum.getApiCallFunction());
        }

        modelsFile.writeToFile();
        actionsFile.writeToFile();
        apiFuncFile.writeToFile();
        handlers.writeToFile();
    }

    public String generate() {

        StringBuilder b = new StringBuilder();

        b.append(importer.toCode()).append("\n\n");
        b.append("//@flow").append("\n");

        addToStringBuilder(enums, b, "\n// ----- Enums ------\n");
        addToStringBuilder(models, b, "\n// ----- Models ------\n");

        additionalFetchFunction =
            apiCallFunctionData.stream()
                .map(ApiCallFunctionData::getApiCallFunction)
                .map(ApiCallFunction::getReduxThunkCallApi)
                .map(reduxThunkCallApi -> Arrays.asList(reduxThunkCallApi.getFetchFunction().getErrorHandler(),
                        reduxThunkCallApi.getFetchFunction().getSuccessHandler(),
                        reduxThunkCallApi.getFetchFunction().getTypeResolverFunction(),
                        reduxThunkCallApi.getInternalLogic()))
        .flatMap(Collection::stream)
        .collect(Collectors.toMap(FlowType::getName, Function.identity(), (x,y) -> x));

        b.append("\n// general components for function\n");
        b.append(apiCallGeneralFunctions.toCode());
        b.append("\n// function for fetches\n");
        additionalFetchFunction.forEach((key, value) -> b.append(value.toCode()).append("\n"));
        b.append("\n// functions\n");
        apiCallFunctionData.sort(comparing(ApiCallFunctionData::getMethod));
        for (ApiCallFunctionData apiCallFunctionDatum : apiCallFunctionData) {
            b.append(apiCallFunctionDatum.getApiCallFunction().toCode()).append("\n");
        }

        exporter = () ->
            "export const API = { \n" +
                    "\tCALL: {\n" +
                        apiCallFunctionData.stream().map(func -> "\t\t" + func.getFunctionName()).collect(Collectors.joining(",\n")) +
                    "\t},\n" +
                    "\tMODELS: {\n" +
                        models.stream().map(model -> "\t\t" + model.getName()).collect(Collectors.joining(",\n")) +
                    "\t}\n" +
            "};"
        ;
        b.append(exporter.toCode());

        return b.toString();
    }

    private static String removeIncorrectFlowSymbols(final String s){
        return s.replaceAll("@", "");
    }

    public void addApiCallFunctionOpenApi(Map.Entry<String, PathItem> pathEntry){
        PathItem path = pathEntry.getValue();


    }

    public void addApiCallFunction(Map.Entry<String, Path> pathEntry){



        Path path = pathEntry.getValue();
        Map<HttpMethod, Operation> operations = path.getOperationMap();

        for (Map.Entry<HttpMethod, Operation> o : operations.entrySet()) {
            ApiCallFunctionData apiCallFunctionData = new ApiCallFunctionData();
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

                    String type = null;

                    Model schema = ((BodyParameter) parameter).getSchema();

                    if (schema instanceof RefModel){
                        type = ((RefModel) schema).getSimpleRef();
                    }
                    else {
                        if (schema instanceof ModelImpl){
                            ModelImpl model = ((ModelImpl) schema);

                            throw new IllegalStateException("Not implement object model. Please define separate model in swagger");
                        }
                    }

                    flowTypeParams.add(FlowTypeParam.builder()
                            .name(parameter.getName())
                            .required(parameter.getRequired())
                            .flowTypeParamEnum(FlowTypeParam.FlowTypeParamEnum.BODY)
                            .type(type)
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
            this.apiCallFunctionData.add(apiCallFunctionData);
        }



    }

    public void addModel(Map.Entry<String, Model> modelEntry){

        String typeName = modelEntry.getKey();

        if (typeName.equals("Role")){
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

                        if (property.getType().equals("integer") || property.getType().equals("float") || property.getType().equals("double")){
                            flowTypeParam.setType("number");
                        }
                        else {

                            flowTypeParam.setType(stringPropertyEntry.getValue().getType());
                        }
                    }
                }
            }


            flowTypeParams.add(flowTypeParam);
        }

        models.add(new FlowObjectType(typeName, flowTypeParams));

    }

}
