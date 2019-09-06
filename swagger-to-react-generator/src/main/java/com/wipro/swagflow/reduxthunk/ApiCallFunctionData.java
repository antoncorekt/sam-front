package com.wipro.swagflow.reduxthunk;

import com.wipro.swagflow.flow.FlowElement;
import com.wipro.swagflow.flow.FlowFunction;
import com.wipro.swagflow.flow.FlowObjectType;
import com.wipro.swagflow.flow.FlowTypeParam;
import io.swagger.models.*;
import io.swagger.models.properties.RefProperty;
import lombok.Data;

import java.io.IOException;
import java.net.URISyntaxException;
import java.util.*;
import java.util.concurrent.atomic.AtomicReference;
import java.util.stream.Collectors;

/**
 * @author Anton Kozlovskyi
 * @date 20 Aug 2019
 */
@Data
public class ApiCallFunctionData {

    public static final String ACTION_SUCCESS_MARKER = "Success";
    public static final String ACTION_REQUEST_MARKER = "Request";
    public static final String ACTION_FAIL_MARKER = "Fail";

    private String path;
    private HttpMethod method;
    private String summary;
    private int paramNumber;
    private List<FlowTypeParam> params;
    private Map<String, Response> responses;

    private String functionName;
    private String actionBaseName;
    private String actionRequestName;
    private String actionSuccessName;
    private String actionFailName;

    private FlowElement actionsCode;

    private ApiCallFunction apiCallFunction;

    private FlowObjectType queryParametersClass;

    private FlowFunction apiCallFunctionWithBuilderParams;

    private FlowElement reducerHandler;

    public void init() throws IOException, URISyntaxException {
        functionName = getFunctionName();
        actionBaseName = firstSymToUpperCase(functionName);
        actionSuccessName = actionBaseName + ACTION_SUCCESS_MARKER;
        actionFailName = actionBaseName + ACTION_FAIL_MARKER;
        actionRequestName = actionBaseName + ACTION_REQUEST_MARKER;

        actionsCode = () -> "\n// actions for " + method.toString() + " " + path + "" +
                "\nexport const " + actionSuccessName + " = \"" + actionSuccessName + "\";" +
                "\nexport const " + actionRequestName + " = \"" + actionRequestName + "\";" +
                "\nexport const " + actionFailName + " = \"" + actionFailName + "\"\n;";

        apiCallFunction = new ApiCallFunction(functionName, this);

        apiCallFunction.getFuncAdditionalParam().add(params);
        apiCallFunction.bodyInit();

        List<FlowTypeParam> queryParams = params.stream()
                .filter(param -> FlowTypeParam.FlowTypeParamEnum.PATH.equals(param.getFlowTypeParamEnum()) || FlowTypeParam.FlowTypeParamEnum.QUERY.equals(param.getFlowTypeParamEnum()))
                .collect(Collectors.toList());

        List<FlowTypeParam> flowTypeParams = new ArrayList<>();


        if (!queryParams.isEmpty()) {
            queryParametersClass = new FlowObjectType(firstSymToUpperCase(functionName) + "QueryParams", queryParams);
            flowTypeParams.add(FlowTypeParam.builder()
                    .name(firstSymToLowCase(queryParametersClass.getName()))
                    .type(queryParametersClass.getName())
                    .build());
        }

//        apiCallFunctionWithBuilderParams = new FlowFunction(functionName + "Alias");
//
//        if (apiCallFunction.getBody() != null){
//            flowTypeParams.add(FlowTypeParam.builder()
//                    .name("body")
//                    .type(apiCallFunction.getBody())
//                    .build());
//        }
//
//        apiCallFunctionWithBuilderParams.setFuncAdditionalParam(Collections.singletonList(flowTypeParams));
//
//        apiCallFunctionWithBuilderParams.setBody("return " + flowTypeParams.stream().map(param -> "param"));

        AtomicReference<String> body = new AtomicReference<>("null");
        String query = "null";

        params.stream()
                .filter(param -> param.getFlowTypeParamEnum().equals(FlowTypeParam.FlowTypeParamEnum.BODY))
                .findFirst()
                .ifPresent(param -> {
                    body.set(param.getType());
                });

        if (queryParametersClass != null)
            query = queryParametersClass.getName();

        List< FlowTypeParam> responsesWithParam = new ArrayList<>();

        AtomicReference<String> successType= new AtomicReference<>("null");

        Optional<Map.Entry<String, Response>> firstSuccessReturnValue = responses.entrySet().stream()
                .filter(x -> "200".equals(x.getKey()) || "201".equals(x.getKey()))
                .findFirst();

        firstSuccessReturnValue.ifPresent(
                x-> {
                    Response response = x.getValue();
                    Model model = response.getResponseSchema();

                    if (model instanceof RefModel){
                        responsesWithParam.add(FlowTypeParam.builder()
                                .name(x.getKey())
                                .type(((RefModel)model).getSimpleRef())
                                .build());
                        successType.set(((RefModel) model).getSimpleRef());
                    }

                    if (model instanceof ArrayModel){
                        ArrayModel arrayModel = (ArrayModel)model;

                        if (arrayModel.getItems() instanceof RefProperty){
                            RefProperty refProperty = (RefProperty) arrayModel.getItems();

                            responsesWithParam.add(FlowTypeParam.builder()
                                    .name(x.getKey())
                                    .type("Array<"+refProperty.getSimpleRef()+">")
                                    .build());
                            successType.set("Array<"+refProperty.getSimpleRef()+">");
                        }
                    }

                    int i = 1;
                }
        );

        String finalQuery = query;
        reducerHandler = () -> "export const " + getActionBaseName() + "Handler = <S>() => {\n"+
                "\t return {\n" +
                "\t\t ACT." + getActionRequestName() + ":(state:S, action:ActionRequestData<" +body+ ", "+finalQuery +">)=>{\n" +
                "\t\t\t return state;\n"+
                "\t\t},\n" +
                "\t\t ACT." + getActionSuccessName() + ":(state:S, action:ActionResponseData<" +successType+ ",ActionRequestData<" +body+ ", "+finalQuery +">>)=>{\n" +
                "\t\t\t return state;\n"+
                "\t\t},\n" +
                "\t\t ACT." + getActionFailName() + ":(state:S, action:ActionRequestData<" +apiCallFunction.getName()+ ">)=>{\n" +
                "\t\t\t return state;\n"+
                "\t\t},\n" +
                "\t}\n" +
                "}"
        ;

    }

    /**
     *  GET /pets => getPets
     *  GET /pets/{ID} => getPetsByID
     *  POST /pets => postPets
     *  PATCH /animals/pets => patchAnimalsPets
     *  PATCH /animals/{petsType}/grow => patchAnimalsByPetsTypeGrow
     */
    public String getFunctionName(){
        StringBuilder res = new StringBuilder(method.toString().toLowerCase());
        String[] tokens = path.split("/");
        for (String token : tokens) {
            if ("".equals(token) || token.replace(" ", "").equals("")) continue;
            if (token.contains("{")){
                res.append("By").append(firstSymToUpperCase(token.replace("{", "").replace("}", "")));
            }
            else {
                res.append(firstSymToUpperCase(token));
            }
        }
        return res.toString();
    }

    private String firstSymToUpperCase(String srt){ return srt.substring(0,1).toUpperCase() + srt.substring(1);}
    private String firstSymToLowCase(String srt){ return srt.substring(0,1).toLowerCase() + srt.substring(1);}

}
