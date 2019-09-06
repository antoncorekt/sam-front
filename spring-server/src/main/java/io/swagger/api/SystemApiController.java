package io.swagger.api;

import io.swagger.model.ResultSetError;
import io.swagger.model.ResultSetStatus;
import io.swagger.model.ResultSetVersion;
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
public class SystemApiController implements SystemApi {

    private static final Logger log = LoggerFactory.getLogger(SystemApiController.class);

    private final ObjectMapper objectMapper;

    private final HttpServletRequest request;

    @org.springframework.beans.factory.annotation.Autowired
    public SystemApiController(ObjectMapper objectMapper, HttpServletRequest request) {
        this.objectMapper = objectMapper;
        this.request = request;
    }

    public ResponseEntity<ResultSetStatus> systemStatusGet() {
        String accept = request.getHeader("Accept");
        if (accept != null && accept.contains("application/json")) {
            try {
                return new ResponseEntity<ResultSetStatus>(objectMapper.readValue("{  \"processedRequestsErrors\" : 7,  \"memoryNMalloc\" : 5,  \"memoryAlloc\" : 0,  \"memorySys\" : 1,  \"memoryNFree\" : 5,  \"processedRequests\" : 2,  \"memoryTotalAlloc\" : 6,  \"processedRequestsOk\" : 9,  \"runningSince\" : \"runningSince\",  \"processingTimeTotalSec\" : 3.616076749251911,  \"status\" : \"Ok\"}", ResultSetStatus.class), HttpStatus.NOT_IMPLEMENTED);
            } catch (IOException e) {
                log.error("Couldn't serialize response for content type application/json", e);
                return new ResponseEntity<ResultSetStatus>(HttpStatus.INTERNAL_SERVER_ERROR);
            }
        }

        return new ResponseEntity<ResultSetStatus>(HttpStatus.NOT_IMPLEMENTED);
    }

    public ResponseEntity<ResultSetVersion> systemVersionGet() {
        String accept = request.getHeader("Accept");
        if (accept != null && accept.contains("application/json")) {
            try {
                return new ResponseEntity<ResultSetVersion>(objectMapper.readValue("{  \"version\" : \"version\",  \"status\" : \"Ok\"}", ResultSetVersion.class), HttpStatus.NOT_IMPLEMENTED);
            } catch (IOException e) {
                log.error("Couldn't serialize response for content type application/json", e);
                return new ResponseEntity<ResultSetVersion>(HttpStatus.INTERNAL_SERVER_ERROR);
            }
        }

        return new ResponseEntity<ResultSetVersion>(HttpStatus.NOT_IMPLEMENTED);
    }

}
