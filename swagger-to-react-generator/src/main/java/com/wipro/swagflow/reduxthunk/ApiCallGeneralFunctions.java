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

    public ApiCallGeneralFunctions() throws IOException, URISyntaxException {
        this.additionalFunctions = FlowFunction.parseFromString(getStringFromFile(this, "additionalFunctions.js"));
        additionalFunctionsUsage = () -> "export const _ = " + additionalFunctions.getName() + "();" +
                                         "const idGen = _.idMaker;";

        ;
    }

    @Override
    public String toCode() {
        return additionalFunctions.toCode() + "\n"
                + additionalFunctionsUsage.toCode()
                ;
    }
}
