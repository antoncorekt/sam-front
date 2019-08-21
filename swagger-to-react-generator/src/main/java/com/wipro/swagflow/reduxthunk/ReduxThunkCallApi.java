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
public class ReduxThunkCallApi implements FlowElement {

    private final FlowFunction internalLogic;

    private final FetchFunction fetchFunction;

    public ReduxThunkCallApi(FetchFunction fetchFunction) throws IOException, URISyntaxException {

        this.fetchFunction = fetchFunction;

        this.internalLogic = FlowFunction.parseFromString(getStringFromFile(this,"reduxThunkCallApi.js"));
    }


    @Override
    public String toCode() {
        return null;
    }
}
