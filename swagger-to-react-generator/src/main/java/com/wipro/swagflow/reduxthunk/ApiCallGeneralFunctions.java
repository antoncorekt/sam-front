package com.wipro.swagflow.reduxthunk;

import com.wipro.swagflow.FlowElement;
import com.wipro.swagflow.FlowFunction;
import lombok.Data;

import java.io.IOException;
import java.net.URISyntaxException;

import static com.wipro.swagflow.reduxthunk.FetchFunction.getStringFromFile;

/**
 * @author Anton Kozlovskyi
 * @date 21 Aug 2019
 */
@Data
public class ApiCallGeneralFunctions implements FlowElement {

    private final FlowFunction additionalFunctions;

    private final FlowElement additionalFunctionsUsage;
    private final FlowElement apiPropertiesClass;

    public ApiCallGeneralFunctions() throws IOException, URISyntaxException {
        this.additionalFunctions = FlowFunction.parseFromString(getStringFromFile(this, "additionalFunctions.js"));
        additionalFunctionsUsage = () -> "export const _ = " + additionalFunctions.getName() + "();" +
                                         "const idGen = _.idMaker;";

        ;
        apiPropertiesClass = () -> "class ApiProperties {\n" +
                "    contentType: string;\n" +
                "    url: string;\n" +
                "    httpMethod: string;\n" +
                "    body: any;\n" +
                "    type: string;\n" +
                "    headers: HeadersInit;\n" +
                "}";
    }

    @Override
    public String toCode() {
        return additionalFunctions.toCode() + "\n"
                + additionalFunctionsUsage.toCode() +"\n"
                + apiPropertiesClass.toCode()
                ;
    }
}
