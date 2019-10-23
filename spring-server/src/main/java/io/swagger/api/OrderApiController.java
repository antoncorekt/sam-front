package io.swagger.api;

import io.swagger.model.RequestSetOrder;
import io.swagger.model.ResultSetCount;
import io.swagger.model.ResultSetError;
import io.swagger.model.ResultSetOrder;
import io.swagger.model.ResultSetOrders;
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
public class OrderApiController implements OrderApi {

    private static final Logger log = LoggerFactory.getLogger(OrderApiController.class);

    private final ObjectMapper objectMapper;

    private final HttpServletRequest request;

    @org.springframework.beans.factory.annotation.Autowired
    public OrderApiController(ObjectMapper objectMapper, HttpServletRequest request) {
        this.objectMapper = objectMapper;
        this.request = request;
    }

    public ResponseEntity<ResultSetCount> orderBscsAccountSegmentByStatusAndReleaseDelete(@ApiParam(value = "status of the package, W for workm P for production",required=true, allowableValues = "\"W\", \"C\", \"P\"") @PathVariable("status") String status,@ApiParam(value = "release sequential number, 0 for work, else production",required=true, allowableValues = "\"0\", \"last\"") @PathVariable("release") String release,@ApiParam(value = "release sequential number, 0 for work, else production",required=true) @PathVariable("bscsAccount") String bscsAccount,@ApiParam(value = "customer segment code",required=true) @PathVariable("segment") String segment,@ApiParam(value = "" ) @RequestHeader(value="X-Request-ID", required=false) UUID xRequestID) {
        String accept = request.getHeader("Accept");
        if (accept != null && accept.contains("application/json")) {
            try {
                return new ResponseEntity<ResultSetCount>(objectMapper.readValue("{  \"count\" : 0,  \"status\" : \"Ok\"}", ResultSetCount.class), HttpStatus.NOT_IMPLEMENTED);
            } catch (IOException e) {
                log.error("Couldn't serialize response for content type application/json", e);
                return new ResponseEntity<ResultSetCount>(HttpStatus.INTERNAL_SERVER_ERROR);
            }
        }

        return new ResponseEntity<ResultSetCount>(HttpStatus.NOT_IMPLEMENTED);
    }

    public ResponseEntity<ResultSetOrders> orderBscsAccountSegmentByStatusAndReleasePut(@ApiParam(value = "status of the package, W for workm P for production",required=true, allowableValues = "\"W\", \"C\", \"P\"") @PathVariable("status") String status,@ApiParam(value = "release sequential number, 0 for work, else production",required=true, allowableValues = "\"0\", \"last\"") @PathVariable("release") String release,@ApiParam(value = "release sequential number, 0 for work, else production",required=true) @PathVariable("bscsAccount") String bscsAccount,@ApiParam(value = "customer segment code",required=true) @PathVariable("segment") String segment,@ApiParam(value = "" ) @RequestHeader(value="X-Request-ID", required=false) UUID xRequestID) {
        String accept = request.getHeader("Accept");
        if (accept != null && accept.contains("application/json")) {
            try {
                return new ResponseEntity<ResultSetOrders>(objectMapper.readValue("{  \"data\" : [ {    \"releaseId\" : 0,    \"status\" : \"W\",    \"bscsAccount\" : \"BSCSACCOUNT\",    \"segmentCode\" : \"XXX\",    \"orderNumber\" : 123,    \"validFromDate\" : { }  }, {    \"releaseId\" : 0,    \"status\" : \"W\",    \"bscsAccount\" : \"BSCSACCOUNT\",    \"segmentCode\" : \"XXX\",    \"orderNumber\" : 123,    \"validFromDate\" : { }  } ],  \"count\" : 0,  \"status\" : \"Ok\"}", ResultSetOrders.class), HttpStatus.NOT_IMPLEMENTED);
            } catch (IOException e) {
                log.error("Couldn't serialize response for content type application/json", e);
                return new ResponseEntity<ResultSetOrders>(HttpStatus.INTERNAL_SERVER_ERROR);
            }
        }

        return new ResponseEntity<ResultSetOrders>(HttpStatus.NOT_IMPLEMENTED);
    }

    public ResponseEntity<ResultSetOrders> orderByStatusAndReleaseGet(@ApiParam(value = "status of the package, W for workm P for production",required=true, allowableValues = "\"W\", \"C\", \"P\"") @PathVariable("status") String status,@ApiParam(value = "release sequential number, 0 for work, else production",required=true, allowableValues = "\"0\", \"last\"") @PathVariable("release") String release,@ApiParam(value = "" ) @RequestHeader(value="X-Request-ID", required=false) UUID xRequestID) {
        String accept = request.getHeader("Accept");
        if (accept != null && accept.contains("application/json")) {
            try {
                return new ResponseEntity<ResultSetOrders>(objectMapper.readValue("{  \"data\" : [ {    \"releaseId\" : 0,    \"status\" : \"W\",    \"bscsAccount\" : \"BSCSACCOUNT\",    \"segmentCode\" : \"XXX\",    \"orderNumber\" : 123,    \"validFromDate\" : { }  }, {    \"releaseId\" : 0,    \"status\" : \"W\",    \"bscsAccount\" : \"BSCSACCOUNT\",    \"segmentCode\" : \"XXX\",    \"orderNumber\" : 123,    \"validFromDate\" : { }  } ],  \"count\" : 0,  \"status\" : \"Ok\"}", ResultSetOrders.class), HttpStatus.NOT_IMPLEMENTED);
            } catch (IOException e) {
                log.error("Couldn't serialize response for content type application/json", e);
                return new ResponseEntity<ResultSetOrders>(HttpStatus.INTERNAL_SERVER_ERROR);
            }
        }

        return new ResponseEntity<ResultSetOrders>(HttpStatus.NOT_IMPLEMENTED);
    }

    public ResponseEntity<ResultSetCount> orderDelete(@ApiParam(value = "" ) @RequestHeader(value="X-Request-ID", required=false) UUID xRequestID) {
        String accept = request.getHeader("Accept");
        if (accept != null && accept.contains("application/json")) {
            try {
                return new ResponseEntity<ResultSetCount>(objectMapper.readValue("{  \"count\" : 0,  \"status\" : \"Ok\"}", ResultSetCount.class), HttpStatus.NOT_IMPLEMENTED);
            } catch (IOException e) {
                log.error("Couldn't serialize response for content type application/json", e);
                return new ResponseEntity<ResultSetCount>(HttpStatus.INTERNAL_SERVER_ERROR);
            }
        }

        return new ResponseEntity<ResultSetCount>(HttpStatus.NOT_IMPLEMENTED);
    }

    public ResponseEntity<ResultSetOrder> orderPost(@ApiParam(value = "Creation of object Order" ,required=true )  @Valid @RequestBody RequestSetOrder body,@ApiParam(value = "" ) @RequestHeader(value="X-Request-ID", required=false) UUID xRequestID) {
        String accept = request.getHeader("Accept");
        if (accept != null && accept.contains("application/json")) {
            try {
                return new ResponseEntity<ResultSetOrder>(objectMapper.readValue("{  \"data\" : {    \"releaseId\" : 0,    \"status\" : \"W\",    \"bscsAccount\" : \"BSCSACCOUNT\",    \"segmentCode\" : \"XXX\",    \"orderNumber\" : 123,    \"validFromDate\" : { }  },  \"status\" : \"Ok\"}", ResultSetOrder.class), HttpStatus.NOT_IMPLEMENTED);
            } catch (IOException e) {
                log.error("Couldn't serialize response for content type application/json", e);
                return new ResponseEntity<ResultSetOrder>(HttpStatus.INTERNAL_SERVER_ERROR);
            }
        }

        return new ResponseEntity<ResultSetOrder>(HttpStatus.NOT_IMPLEMENTED);
    }

}
