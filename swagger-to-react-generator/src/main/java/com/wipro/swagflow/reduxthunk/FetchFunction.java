package com.wipro.swagflow.reduxthunk;

import com.wipro.swagflow.FlowElement;
import com.wipro.swagflow.FlowFunction;
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

    private FlowFunction typeResolverFunction;
    private FlowFunction successHandler;
    private FlowFunction errorHandler;

    private String urlVarName = "url";
    private String settingsVarName = "settings";

    public FetchFunction() throws URISyntaxException, IOException {


        typeResolverFunction = FlowFunction.parseFromString(getStringFromFile("typeResolverFunctionBody.js"));
        successHandler = FlowFunction.parseFromString(getStringFromFile("handlerSuccess.js"));
        errorHandler = FlowFunction.parseFromString(getStringFromFile("errorHandler.js"));

    }

    private String getStringFromFile(String fileName) throws URISyntaxException, IOException {
        Path path = Paths.get(getClass().getClassLoader()
                .getResource(fileName).toURI());

        Stream<String> lines = Files.lines(path);
        String data = lines.collect(Collectors.joining("\n"));
        lines.close();
        return data;
    }

    @Override
    public String toCode() {
        return "fetch(" + urlVarName + ", " + settingsVarName + ")" +
                ".then(" + typeResolverFunction.getName() + ")" +
                ".then(" + successHandler.getName() + ")" +
                ".catch(" + errorHandler.getName() + ")";
    }
}
