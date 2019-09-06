/**
 * NOTE: This class is auto generated by the swagger code generator program (2.4.8).
 * https://github.com/swagger-api/swagger-codegen
 * Do not edit the class manually.
 */
package io.swagger.api;

import io.swagger.model.RequestSetUserLogin;
import io.swagger.model.RequestSetUserLogoff;
import io.swagger.model.ResultSetError;
import io.swagger.model.ResultSetOk;
import io.swagger.model.ResultSetUserLogin;
import java.util.UUID;
import io.swagger.annotations.*;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RequestPart;
import org.springframework.web.multipart.MultipartFile;

import javax.validation.Valid;
import javax.validation.constraints.*;
import java.util.List;
@javax.annotation.Generated(value = "io.swagger.codegen.languages.SpringCodegen", date = "2019-09-06T13:08:35.508Z")

@Api(value = "user", description = "the user API")
public interface UserApi {

    @ApiOperation(value = "loginUser", nickname = "userLoginPost", notes = "Creates user session and produces authorization token. It validates LDAP profile. Requires user id, role id and domain passowrd. This profile is to be validated with domain service. It will be encoded in thee claims of the JWT token produced by the service. The token has to be used in each subsequent method invocation in header Authorization item with authorization type Bearer.", response = ResultSetUserLogin.class, tags={ "user", })
    @ApiResponses(value = { 
        @ApiResponse(code = 200, message = "Successful operation", response = ResultSetUserLogin.class),
        @ApiResponse(code = 400, message = "Invalid username/password supplied", response = ResultSetError.class),
        @ApiResponse(code = 200, message = "Server error", response = ResultSetError.class) })
    @RequestMapping(value = "/user/login",
        produces = { "application/json" }, 
        consumes = { "application/json" },
        method = RequestMethod.POST)
    ResponseEntity<ResultSetUserLogin> userLoginPost(@ApiParam(value = "User login payload" ,required=true )  @Valid @RequestBody RequestSetUserLogin body,@ApiParam(value = "" ) @RequestHeader(value="X-Request-ID", required=false) UUID xRequestID);


    @ApiOperation(value = "logoffUser", nickname = "userLogoffPost", notes = "Logs off current logged in user session. The invalidation of the token is based on the explicit storing of the invalid tokens in REDIS backend cache.", response = ResultSetOk.class, tags={ "user", })
    @ApiResponses(value = { 
        @ApiResponse(code = 200, message = "Successful operation", response = ResultSetOk.class),
        @ApiResponse(code = 400, message = "Invalid username supplied", response = ResultSetError.class),
        @ApiResponse(code = 401, message = "Not authenticated", response = ResultSetError.class),
        @ApiResponse(code = 200, message = "Server error", response = ResultSetError.class) })
    @RequestMapping(value = "/user/logoff",
        produces = { "application/json" }, 
        consumes = { "application/json" },
        method = RequestMethod.POST)
    ResponseEntity<ResultSetOk> userLogoffPost(@ApiParam(value = "User logoff payload" ,required=true )  @Valid @RequestBody RequestSetUserLogoff body,@ApiParam(value = "" ) @RequestHeader(value="X-Request-ID", required=false) UUID xRequestID);

}
