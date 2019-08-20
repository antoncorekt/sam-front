package com.wipro.swagflow;

import io.swagger.models.HttpMethod;
import io.swagger.models.ParamType;
import io.swagger.models.Response;
import io.swagger.models.auth.In;
import lombok.Data;
import org.omg.PortableInterceptor.SUCCESSFUL;

import java.util.List;
import java.util.Map;

/**
 * @author Anton Kozlovskyi
 * @date 20 Aug 2019
 */
@Data
public class ApiCallFunctionData {

    private static final String ACTION_SUCCESS_MARKER = "Success";
    private static final String ACTION_REQUEST_MARKER = "Request";
    private static final String ACTION_FAIL_MARKER = "Fail";

    private String path;
    private HttpMethod method;
    private String summary;
    private int paramNumber;
    private List<FlowTypeParam> params;
    private Map<String, Response> responses;

    private String functionName;
    private String actionRequestName;
    private String actionSuccessName;
    private String actionFailName;

    private FlowElement actionsCode;

    private FlowFunction apiCallFunction;

    public void init(){
        functionName = getFunctionName();
        actionSuccessName = firstSymToUpperCase(functionName) + ACTION_SUCCESS_MARKER;
        actionFailName = firstSymToUpperCase(functionName) + ACTION_FAIL_MARKER;
        actionRequestName = firstSymToUpperCase(functionName) + ACTION_REQUEST_MARKER;

        actionsCode = () -> {
            StringBuilder stringBuilder = new StringBuilder();
            stringBuilder.append("\n// actions for ").append(method.toString()).append(" ").append(path).append("");
            stringBuilder.append("\nexport const ").append(actionSuccessName).append(" = \"").append(actionSuccessName).append("\";");
            stringBuilder.append("\nexport const ").append(actionRequestName).append(" = \"").append(actionRequestName).append("\";");
            stringBuilder.append("\nexport const ").append(actionFailName).append(" = \"").append(actionFailName).append("\";");
            return stringBuilder.toString();
        };

        apiCallFunction = new FlowFunction(functionName);

        apiCallFunction.setParams(params);
        apiCallFunction.setBody("// function body");
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
