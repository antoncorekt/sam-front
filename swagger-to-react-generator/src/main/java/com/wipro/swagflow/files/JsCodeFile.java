package com.wipro.swagflow.files;

import com.wipro.swagflow.flow.FlowElement;

import java.util.ArrayList;
import java.util.Collection;
import java.util.List;
import java.util.Set;
import java.util.stream.Collectors;

/**
 * @author Anton Kozlovskyi
 * @date 29 Aug 2019
 */
public class JsCodeFile extends AbstractJsFile {

    private List<FlowElement> flowElements = new ArrayList<>();

    public JsCodeFile(String fileName, String relativePath) {
        super(fileName, relativePath);
    }

    public void addElement(FlowElement flowElement){
        flowElements.add(flowElement);
    }

    public void addElementToTop(FlowElement flowElement){
        flowElements.add(0, flowElement);
    }

    public void addElement(String flowElement){
        flowElements.add(()->flowElement);
    }

    public void addElement(Collection<? extends FlowElement> flowElement){
        flowElements.addAll(flowElement);
    }

    @Override
    public String getCode() {
        return flowElements.stream().map(FlowElement::toCode).collect(Collectors.joining("\n"));
    }

}
