package io.swagger.configuration;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import springfox.documentation.builders.ApiInfoBuilder;
import springfox.documentation.builders.RequestHandlerSelectors;
import springfox.documentation.service.ApiInfo;
import springfox.documentation.service.Contact;
import springfox.documentation.spi.DocumentationType;
import springfox.documentation.spring.web.plugins.Docket;

@javax.annotation.Generated(value = "io.swagger.codegen.languages.SpringCodegen", date = "2019-08-30T09:02:23.196Z")

@Configuration
public class SwaggerDocumentationConfig {

    ApiInfo apiInfo() {
        return new ApiInfoBuilder()
            .title("SAM (SAP Account Mapper)")
            .description("Service maps BSCS GL accounts to SAP OFI accounts in order to enable export of financial from BSCS to SAP.")
            .license("All Rights Reserved")
            .licenseUrl("http://t-mobile.pl")
            .termsOfServiceUrl("")
            .version("1.0.0")
            .contact(new Contact("","", "pawel.wojdowski@external.t-mobile.pl"))
            .build();
    }

    @Bean
    public Docket customImplementation(){
        return new Docket(DocumentationType.SWAGGER_2)
                .select()
                    .apis(RequestHandlerSelectors.basePackage("io.swagger.api"))
                    .build()
                .directModelSubstitute(org.threeten.bp.LocalDate.class, java.sql.Date.class)
                .directModelSubstitute(org.threeten.bp.OffsetDateTime.class, java.util.Date.class)
                .apiInfo(apiInfo());
    }

}
