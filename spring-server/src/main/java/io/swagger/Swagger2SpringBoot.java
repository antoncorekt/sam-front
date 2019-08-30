package io.swagger;

import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.ExitCodeGenerator;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.EnableAutoConfiguration;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.domain.EntityScan;
import org.springframework.context.annotation.ComponentScan;

import org.springframework.context.annotation.Import;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;
import springfox.documentation.swagger2.annotations.EnableSwagger2;

@SpringBootApplication
@EnableSwagger2
@EnableJpaRepositories("com.wipro.sam.dao")
@EntityScan("com.wipro.sam.dao")
@ComponentScan(basePackages = { "io.swagger", "io.swagger.api" , "io.swagger.configuration", "com.wipro.sam.dao"})
public class Swagger2SpringBoot  {



    public static void main(String[] args) throws Exception {
        SpringApplication.run(Swagger2SpringBoot.class, args);
    }


}
