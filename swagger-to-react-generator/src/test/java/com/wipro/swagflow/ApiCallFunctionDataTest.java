package com.wipro.swagflow;

import com.wipro.swagflow.flow.FlowTypeParam;
import com.wipro.swagflow.reduxthunk.ApiCallFunctionData;
import io.swagger.models.HttpMethod;
import org.junit.jupiter.api.Test;

import java.io.IOException;
import java.net.URISyntaxException;
import java.util.ArrayList;
import java.util.List;

import static org.junit.jupiter.api.Assertions.*;

class ApiCallFunctionDataTest {

    ApiCallFunctionData apiCallFunctionData = new ApiCallFunctionData();

    @Test
    void getFunctionName1() {
        apiCallFunctionData.setMethod(HttpMethod.GET);
        apiCallFunctionData.setPath("/pets");

        assertEquals("getPets", apiCallFunctionData.getFunctionName());
    }

    @Test
    void getFunctionName2() {
        apiCallFunctionData.setMethod(HttpMethod.GET);
        apiCallFunctionData.setPath("/pets/{ID}");

        assertEquals("getPetsByID", apiCallFunctionData.getFunctionName());
    }

    @Test
    void getFunctionName3() {
        apiCallFunctionData.setMethod(HttpMethod.POST);
        apiCallFunctionData.setPath("/store/pets");

        assertEquals("postStorePets", apiCallFunctionData.getFunctionName());
    }

    @Test
    void getFunctionName4() {
        apiCallFunctionData.setMethod(HttpMethod.PATCH);
        apiCallFunctionData.setPath("/store/{petType}/buy");

        assertEquals("patchStoreByPetTypeBuy", apiCallFunctionData.getFunctionName());
    }

    @Test
    void getFunctionName5() throws IOException, URISyntaxException {
        apiCallFunctionData.setMethod(HttpMethod.PATCH);
        apiCallFunctionData.setPath("/store/{petType}/buy");

        List<FlowTypeParam> params = new ArrayList<>();
        params.add(FlowTypeParam.builder()
                .name("id")
                .type("number")
                .build());
        apiCallFunctionData.setParams(params);
        apiCallFunctionData.init();

        System.out.println(apiCallFunctionData.getActionsCode().toCode());
        System.out.println();
        System.out.println(apiCallFunctionData.getApiCallFunction().toCode());

    }
}