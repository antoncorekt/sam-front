package com.wipro.swagflow;

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

    private Set<FlowEnum> enums = new HashSet<>();
    private List<FlowType> models = new ArrayList<>();

    private ApiCallGeneralFunctions apiCallGeneralFunctions = new ApiCallGeneralFunctions();

    private List<ApiCallFunctionData> apiCallFunctionData = new ArrayList<>();
    private Map<String, FlowFunction> additionalFetchFunction = new HashMap<>();

    private FlowElement exporter;
    private FlowElement importer = () -> "import {BACKEND_URL} from './conf';";

    private FlowElement modelsImporter;

    public JsFlowGenerator() throws IOException, URISyntaxException {
        actionsFile = new JsCodeFile("api-actions-defs.js", "generated/");
        modelsFile = new JsCodeFile("api-models.js", "generated/");
        apiFuncFile = new JsCodeFile("api-func.js", "generated/");
        handlers = new JsCodeFile("api-handlers.js", "generated/");
    }

    private void addToStringBuilder(Collection<? extends FlowElement> elements, StringBuilder builder, String firstLine){
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

        apiFuncFile.addElementToTop(getModelsImports());
        handlers.addElementToTop(getModelsImports());

        modelsFile.writeToFile();
        actionsFile.writeToFile();
        apiFuncFile.writeToFile();
        handlers.writeToFile();
    }

    public FlowElement getModelsImports(){
        return () -> "import { " + "\n" +
                models.stream()
                .map(mod -> mod.getName().getJsLexicalWithUpperCase())
                        .distinct()
                .collect(Collectors.joining(",\n")) +
                "} from './api-models.js'";
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
        .collect(Collectors.toMap(x->x.getName().getOriginal()
                , Function.identity(), (x,y) -> x));

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
            final ApiCallFunctionData apiCallFunctionData = new ApiCallFunctionData();
            apiCallFunctionData.setMethod(o.getKey());
            apiCallFunctionData.setPath(pathEntry.getKey());
            apiCallFunctionData.setSummary(o.getValue().getSummary());
            List<FlowTypeParam> flowTypeParams = new ArrayList<>();

            if (o.getValue().getConsumes() == null){
                apiCallFunctionData.setContentType("application/json");
            }
            else {
                o.getValue().getConsumes().stream().findFirst().ifPresent(
                        apiCallFunctionData::setContentType
                );
            }

            for (Parameter parameter : o.getValue().getParameters()) {

                if (parameter instanceof QueryParameter){
                    flowTypeParams.add(FlowTypeParam.builder()
                            .name(new JsWord(parameter.getName()))
                            .required(parameter.getRequired())
                            .flowTypeParamEnum(FlowTypeParam.FlowTypeParamEnum.QUERY)
                            .defaultValue(((QueryParameter) parameter).getDefaultValue())
                            .type((((QueryParameter) parameter).getType()))
                            .build());
                    continue;
                }

                if (parameter instanceof PathParameter){

                    if (parameter.getName().equals("status")){
                        int i =45;
                    }
                    PathParameter pathParameter = (PathParameter)parameter;

                    String type = pathParameter.getType();

                    if (pathParameter.getEnum() != null && !pathParameter.getEnum().isEmpty()){
                        Optional<FlowEnum> existEnum = enums.stream()
                                .filter(en -> en.isParamEquals(pathParameter.getEnum()))
                                .findAny();

                        if (existEnum.isPresent()){
                            type = existEnum.get().getName();
                        }

                    }

                    flowTypeParams.add(FlowTypeParam.builder()
                            .name(JsWord.from(parameter.getName()))
                            .required(parameter.getRequired())
                            .defaultValue(((PathParameter) parameter).getDefaultValue())
                            .flowTypeParamEnum(FlowTypeParam.FlowTypeParamEnum.PATH)
                            .type(type)
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

                            if (((ModelImpl) schema).getType().equals("string")){
                                type = "string";
                            }
                            else {
                                if (model.getType().equals("file")){
                                    type = "File";
                                }
                                else
                                    throw new IllegalStateException("Not implement object model. Please define separate model in swagger. " + parameter.getName());
                            }
                        }
                    }

                    flowTypeParams.add(FlowTypeParam.builder()
                            .name(JsWord.from(parameter.getName()))
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

        JsWord typeNameJsWorld = new JsWord( modelEntry.getKey()) ;

        if (typeNameJsWorld.getOriginal().equals("UserLogin")){
            System.out.println("bla");
        }

        List<FlowTypeParam> flowTypeParams = new ArrayList<>();

        if (modelEntry.getValue().getProperties() == null){
            Model model = modelEntry.getValue();
            if (model instanceof ArrayModel && ((ArrayModel)model).getType().equals("array"))
                models.add(new FlowArrayType(JsWord.from(((RefProperty) ((ArrayModel) model).getItems()).getSimpleRef()), typeNameJsWorld.getJsLexicalWithUpperCase()));

            if (model instanceof ModelImpl){
                ModelImpl modelImpl = (ModelImpl)model;

                if (modelImpl.getEnum() != null && !modelImpl.getEnum().isEmpty()){
                    FlowEnum flowEnum = new FlowEnum();
                    flowEnum.setName(typeNameJsWorld.getJsLexicalWithUpperCase());
                    flowEnum.setParam(modelImpl.getEnum());

                    enums.add(flowEnum);
                }
                else {

                    System.err.println("Not implement ModelImpl object without enum. Example: " + typeNameJsWorld.getOriginal());

                    //throw new IllegalStateException("Not implement ModelImpl object without enum. Example: " + typeName);
                }

            }

            return;
        }


        for (Map.Entry<String, Property> stringPropertyEntry : modelEntry.getValue().getProperties().entrySet()) {
            FlowTypeParam flowTypeParam = new FlowTypeParam();

            flowTypeParam.setName(JsWord.from(stringPropertyEntry.getKey()));

            Property property = stringPropertyEntry.getValue();

            if (property.getType() == null){
                throw new IllegalStateException(stringPropertyEntry.getKey() + " property is null. Please check it");
            }

            if (property.getType().equals("string")) {

                if (property instanceof DateTimeProperty || property instanceof DateProperty){
                    flowTypeParam.setType("Date");
                }
                else {
                    List<String> propEnums = ((StringProperty)property).getEnum();

                    if (propEnums != null && !propEnums.isEmpty()) {
                        FlowEnum flowEnum = new FlowEnum();
                        String enumName = removeIncorrectFlowSymbols(stringPropertyEntry.getKey());
                        flowEnum.setName(enumName.substring(0,1).toUpperCase() + enumName.substring(1) + "PropEnum");
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

                    if (property instanceof ArrayProperty) {

                        ArrayProperty arrayProperty = ((ArrayProperty) property);


                        if (arrayProperty.getItems() instanceof StringProperty) {
                            flowTypeParam.setType("Array<" + ((StringProperty) arrayProperty.getItems()).getDefault() + ">");
                        }
                        else {
                            if (arrayProperty.getItems().getType().equals("ref"))
                                getArrayTypeFromRefModel(flowTypeParam, (RefProperty) arrayProperty.getItems(), true);
                        }

                    }
                    else {
//                        if (property instanceof StringProperty) // TODO
//                            flowTypeParam.setType("STRING_PROP<" + (((StringProperty) property)).getDefault() + ">");
                        throw new IllegalStateException("Unsupported this. " + stringPropertyEntry.getKey());
                    }

                } else {
                    if (property.getType().equals("ref")) {

                        getArrayTypeFromRefModel(flowTypeParam, (RefProperty) property, false);


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

        models.add(new FlowObjectType(typeNameJsWorld, flowTypeParams));

    }

    private void getArrayTypeFromRefModel(FlowTypeParam flowTypeParam, RefProperty property, boolean isArray) {
        String refType = property.getSimpleRef();

        Optional<FlowArrayType> isThisModelArray = models.stream()
                .filter(model -> model instanceof FlowArrayType)
                .map(model -> (FlowArrayType) model)
                .filter(arrModel -> arrModel.getArrayName().equals(refType))
                .findAny();

        if (isThisModelArray.isPresent()) {
            flowTypeParam.setType("Array<" + isThisModelArray.get().getName() + ">");
        }
        else {
            if (isArray)
                flowTypeParam.setType("Array<" + refType + ">");
            else
                flowTypeParam.setType(refType );
        }
    }

}
