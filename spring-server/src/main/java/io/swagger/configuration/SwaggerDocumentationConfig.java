package io.swagger.configuration;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import springfox.documentation.builders.ApiInfoBuilder;
import springfox.documentation.builders.RequestHandlerSelectors;
import springfox.documentation.service.ApiInfo;
import springfox.documentation.service.Contact;
import springfox.documentation.spi.DocumentationType;
import springfox.documentation.spring.web.plugins.Docket;

@javax.annotation.Generated(value = "io.swagger.codegen.languages.SpringCodegen", date = "2019-09-06T13:08:35.508Z")

@Configuration
public class SwaggerDocumentationConfig {

    ApiInfo apiInfo() {
        return new ApiInfoBuilder()
            .title("Swagger gosamapi")
            .description("API for management of the mapping of BSCS GL accounts to SAP. The methods provided give access to the following entietis of data model: - Account (mapping BSCS GL number to SAP OFI numbers) - Order (Number for BSCS GL account per customer segment) - Segment (dictionary) - Account BSCS numbers (dictionary) - Account SAP numbers (dictionary)  The versioned enties like Account or Order may be processed only in status W like Working. They may be confimed and moved to status C like Confirmed. After that they can be release to status P like Production. Movement from status C to P is a final one in the lifecycle of the account/order mapping. The set of accounts and order released to production can not be modified. It can be only read.   Contrary to that, operations on the dictionary tables are bulk ones. I is possible to clean the whole configuarion and reload it bu not to manipulate on single entries. Bulk delete is to be granted to the Admin role only. The Account and Order entities may be modifid in record by record mode using primary key access but only for status W like Work and release 0.  The release attribute is 0 for the entities in status W like Work and is bigger than 0 for released ones. The api provides key word last for reading the latest release so that it can be processed being stored in status W like Work.  The release entries are to be validated agains existing versions. For example valid data must be: - in the future from the release date - rounded to 1st day of the month (in the future) - can not everlap with valid date of any prevously released version  The access rights to API methods, entities and their propertis is besed on the users role being: - Booker (may create Acconts and fill up most of the values) - Control (may create Order linked to existing Account and update the attribute orderNumber, may do relese, may do promotion of status from W like Working to C like Controlled) - Admin (may do everything, especially purge dictionaries and load them)  The API currently provides 21 business methods and 2 system methods. ")
            .license("")
            .licenseUrl("http://unlicense.org")
            .termsOfServiceUrl("")
            .version("1.0.0")
            .contact(new Contact("","", "norbert.bondarczuk@wipro.com"))
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
