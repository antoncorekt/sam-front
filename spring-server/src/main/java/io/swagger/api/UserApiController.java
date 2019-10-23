package io.swagger.api;

import io.swagger.model.RequestSetUserLogin;
import io.swagger.model.RequestSetUserLogoff;
import io.swagger.model.ResultSetError;
import io.swagger.model.ResultSetOk;
import io.swagger.model.ResultSetUserLogin;
import java.util.UUID;
import com.fasterxml.jackson.databind.ObjectMapper;
import io.swagger.annotations.*;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RequestPart;
import org.springframework.web.multipart.MultipartFile;

import javax.validation.constraints.*;
import javax.validation.Valid;
import javax.servlet.http.HttpServletRequest;
import java.io.IOException;
import java.util.List;
@javax.annotation.Generated(value = "io.swagger.codegen.languages.SpringCodegen", date = "2019-09-06T13:08:35.508Z")

@Controller
public class UserApiController implements UserApi {

    private static final Logger log = LoggerFactory.getLogger(UserApiController.class);

    private final ObjectMapper objectMapper;

    private final HttpServletRequest request;

    @org.springframework.beans.factory.annotation.Autowired
    public UserApiController(ObjectMapper objectMapper, HttpServletRequest request) {
        this.objectMapper = objectMapper;
        this.request = request;
    }

    public ResponseEntity<ResultSetUserLogin> userLoginPost(@ApiParam(value = "User login payload" ,required=true )  @Valid @RequestBody RequestSetUserLogin body,@ApiParam(value = "" ) @RequestHeader(value="X-Request-ID", required=false) UUID xRequestID) {
        String accept = request.getHeader("Accept");
        if (accept != null && accept.contains("application/json")) {
            try {
                return new ResponseEntity<ResultSetUserLogin>(objectMapper.readValue("{  \"data\" : {    \"role\" : \"Booker\",    \"user\" : \"user\",    \"token\" : \"token\"  }}", ResultSetUserLogin.class), HttpStatus.NOT_IMPLEMENTED);
            } catch (IOException e) {
                log.error("Couldn't serialize response for content type application/json", e);
                return new ResponseEntity<ResultSetUserLogin>(HttpStatus.INTERNAL_SERVER_ERROR);
            }
        }

        return new ResponseEntity<ResultSetUserLogin>(HttpStatus.NOT_IMPLEMENTED);
    }

    public ResponseEntity<ResultSetOk> userLogoffPost(@ApiParam(value = "User logoff payload" ,required=true )  @Valid @RequestBody RequestSetUserLogoff body,@ApiParam(value = "" ) @RequestHeader(value="X-Request-ID", required=false) UUID xRequestID) {
        String accept = request.getHeader("Accept");
        if (accept != null && accept.contains("application/json")) {
            try {
                return new ResponseEntity<ResultSetOk>(objectMapper.readValue("{  \"status\" : \"Ok\"}", ResultSetOk.class), HttpStatus.NOT_IMPLEMENTED);
            } catch (IOException e) {
                log.error("Couldn't serialize response for content type application/json", e);
                return new ResponseEntity<ResultSetOk>(HttpStatus.INTERNAL_SERVER_ERROR);
            }
        }

        return new ResponseEntity<ResultSetOk>(HttpStatus.NOT_IMPLEMENTED);
    }

}
