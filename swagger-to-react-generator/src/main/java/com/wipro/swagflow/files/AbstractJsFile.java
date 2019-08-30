package com.wipro.swagflow.files;

import lombok.Data;

import java.io.BufferedWriter;
import java.io.File;
import java.io.FileWriter;
import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;

/**
 * @author Anton Kozlovskyi
 * @date 29 Aug 2019
 */
@Data
public abstract class AbstractJsFile {

    private final String fileName;

    private final String relativePath;

    public abstract String getCode();

    private void createFile(){
        String absolutePath = getClass().getProtectionDomain().getCodeSource().getLocation().getPath();
        Path newFilePath = Paths.get( fileName);
        try {
            Files.deleteIfExists(newFilePath);
            Files.createFile(newFilePath);
        } catch (IOException e) {
            e.printStackTrace();
        }
    }

    public void writeToFile() {
        createFile();
        try {
            BufferedWriter writer = new BufferedWriter(new FileWriter(fileName));
            writer.write(getCode());

            writer.close();
        }
        catch (IOException exception){
            exception.printStackTrace();
        }
    }

}
