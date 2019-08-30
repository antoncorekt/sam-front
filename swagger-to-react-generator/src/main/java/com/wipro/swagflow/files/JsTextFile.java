package com.wipro.swagflow.files;

/**
 * @author Anton Kozlovskyi
 * @date 29 Aug 2019
 */
public class JsTextFile extends AbstractJsFile {

    private final String text;

    public JsTextFile(String fileName, String relativePath, String text) {
        super(fileName, relativePath);
        this.text = text;
    }

    @Override
    public String getCode() {
        return text;
    }
}
