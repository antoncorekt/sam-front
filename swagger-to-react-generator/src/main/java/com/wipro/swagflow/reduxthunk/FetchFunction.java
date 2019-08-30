package com.wipro.swagflow.reduxthunk;

import com.wipro.swagflow.flow.FlowElement;
import com.wipro.swagflow.flow.FlowFunction;
import lombok.Data;

import java.io.IOException;
import java.net.URISyntaxException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.stream.Collectors;
import java.util.stream.Stream;

/**
 * @author Anton Kozlovskyi
 * @date 20 Aug 2019
 */
@Data
public class FetchFunction implements FlowElement {

    private final FlowFunction typeResolverFunction;
    private final FlowFunction successHandler;
    private final FlowFunction errorHandler;

    private String urlVarName = "url";
    private String settingsVarName = "settings";

    public FetchFunction() throws URISyntaxException, IOException {


        typeResolverFunction = FlowFunction.parseFromString(getStringFromFile(this,"typeResolverFunctionBody.js"));
        successHandler = FlowFunction.parseFromString(getStringFromFile(this,"handlerSuccess.js"));
        errorHandler = FlowFunction.parseFromString(getStringFromFile(this,"errorHandler.js"));

    }

    public static String getStringFromFile(FlowElement that, String fileName) throws URISyntaxException, IOException {
        Path path = Paths.get(that.getClass().getClassLoader()
                .getResource(fileName).toURI());

        Stream<String> lines = Files.lines(path);
        String data = lines.collect(Collectors.joining("\n"));
        lines.close();
        return data;
    }

    @Override
    public String toCode() {
        return "fetch(" + urlVarName + ", " + settingsVarName + ") \n" +
                "\t\t.then(" + typeResolverFunction.getName() + ")  \n" +
                "\t\t.then(" + successHandler.getName() + ")  \n" +
                "\t\t.catch(" + errorHandler.getName() + "(props, requestAction, dispatch));";
    }
}
