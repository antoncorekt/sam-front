package com.wipro.swagflow.reduxthunk;

import com.wipro.swagflow.flow.FlowElement;
import com.wipro.swagflow.flow.FlowFunction;
import lombok.Data;

import java.io.IOException;
import java.net.URISyntaxException;

import static com.wipro.swagflow.reduxthunk.FetchFunction.getStringFromFile;

/**
 * @author Anton Kozlovskyi
 * @date 21 Aug 2019
 */
@Data
public class ReduxThunkCallApi implements FlowElement {

    private final FlowFunction internalLogic;
    private final String name;
    private final FetchFunction fetchFunction;

    public ReduxThunkCallApi(FetchFunction fetchFunction) throws IOException, URISyntaxException {

        this.fetchFunction = fetchFunction;

        this.internalLogic = FlowFunction.parseFromString(getStringFromFile(this,"reduxThunkCallApi.js"));
        name = internalLogic.getName().getOriginal();
        internalLogic.setBody(internalLogic.getBody() + "\t return " + fetchFunction.toCode());
    }


    @Override
    public String toCode() {

        return "\n" + internalLogic.toCode() + "\n";
    }
}
