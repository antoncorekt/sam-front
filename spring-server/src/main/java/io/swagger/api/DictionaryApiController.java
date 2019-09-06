package io.swagger.api;

import com.wipro.sam.dao.service.CustomerSegmentsService;
import io.swagger.model.*;

import java.util.UUID;
import com.fasterxml.jackson.databind.ObjectMapper;
import io.swagger.annotations.*;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import javax.validation.constraints.*;
import javax.validation.Valid;
import javax.servlet.http.HttpServletRequest;
import java.io.IOException;
import java.util.List;
@javax.annotation.Generated(value = "io.swagger.codegen.languages.SpringCodegen", date = "2019-09-06T13:08:35.508Z")

@Controller
public class DictionaryApiController implements DictionaryApi {

    private static final Logger log = LoggerFactory.getLogger(DictionaryApiController.class);

    private final ObjectMapper objectMapper;

    private final HttpServletRequest request;

    @org.springframework.beans.factory.annotation.Autowired
    public DictionaryApiController(ObjectMapper objectMapper, HttpServletRequest request) {
        this.objectMapper = objectMapper;
        this.request = request;
    }

    public ResponseEntity<ResultSetCount> dictionaryAccountBscsDelete(@ApiParam(value = "" ) @RequestHeader(value="X-Request-ID", required=false) UUID xRequestID) {
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

    public ResponseEntity<ResultSetAccountDictBscss> dictionaryAccountBscsGet(@ApiParam(value = "" ) @RequestHeader(value="X-Request-ID", required=false) UUID xRequestID) {
        String accept = request.getHeader("Accept");
        if (accept != null && accept.contains("application/json")) {
            try {
                return new ResponseEntity<ResultSetAccountDictBscss>(objectMapper.readValue("{  \"data\" : [ {    \"glCode\" : \"GLCODE\",    \"glDes\" : \"GLDES\",    \"glType\" : \"GLTYPE\",    \"glActive\" : \"Y\"  }, {    \"glCode\" : \"GLCODE\",    \"glDes\" : \"GLDES\",    \"glType\" : \"GLTYPE\",    \"glActive\" : \"Y\"  } ],  \"count\" : 0,  \"status\" : \"Ok\"}", ResultSetAccountDictBscss.class), HttpStatus.NOT_IMPLEMENTED);
            } catch (IOException e) {
                log.error("Couldn't serialize response for content type application/json", e);
                return new ResponseEntity<ResultSetAccountDictBscss>(HttpStatus.INTERNAL_SERVER_ERROR);
            }
        }

        return new ResponseEntity<ResultSetAccountDictBscss>(HttpStatus.NOT_IMPLEMENTED);
    }

    public ResponseEntity<ResultSetAccountDictBscs> dictionaryAccountBscsPost(@ApiParam(value = "Structure of the objects to be create with all fields to be populated" ,required=true )  @Valid @RequestBody RequestSetAccountDictBscs body) {
        String accept = request.getHeader("Accept");
        if (accept != null && accept.contains("application/json")) {
            try {
                return new ResponseEntity<ResultSetAccountDictBscs>(objectMapper.readValue("{  \"data\" : {    \"glCode\" : \"GLCODE\",    \"glDes\" : \"GLDES\",    \"glType\" : \"GLTYPE\",    \"glActive\" : \"Y\"  },  \"status\" : \"Ok\"}", ResultSetAccountDictBscs.class), HttpStatus.NOT_IMPLEMENTED);
            } catch (IOException e) {
                log.error("Couldn't serialize response for content type application/json", e);
                return new ResponseEntity<ResultSetAccountDictBscs>(HttpStatus.INTERNAL_SERVER_ERROR);
            }
        }

        return new ResponseEntity<ResultSetAccountDictBscs>(HttpStatus.NOT_IMPLEMENTED);
    }

    public ResponseEntity<ResultSetCount> dictionaryAccountSapDelete(@ApiParam(value = "" ) @RequestHeader(value="X-Request-ID", required=false) UUID xRequestID) {
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

    public ResponseEntity<ResultSetAccountDictSaps> dictionaryAccountSapGet(@ApiParam(value = "" ) @RequestHeader(value="X-Request-ID", required=false) UUID xRequestID) {


        return new ResponseEntity<ResultSetAccountDictSaps>(HttpStatus.NOT_IMPLEMENTED);
    }

    public ResponseEntity<ResultSetAccountDictSap> dictionaryAccountSapPost(@ApiParam(value = "Structure of the objects to be create with all fields to be populated" ,required=true )  @Valid @RequestBody RequestSetAccountDictSap body,@ApiParam(value = "" ) @RequestHeader(value="X-Request-ID", required=false) UUID xRequestID) {


        return new ResponseEntity<ResultSetAccountDictSap>(HttpStatus.NOT_IMPLEMENTED);
    }

    public ResponseEntity<ResultSetCount> dictionarySegmentDelete(@ApiParam(value = "" ) @RequestHeader(value="X-Request-ID", required=false) UUID xRequestID) {


        return new ResponseEntity<ResultSetCount>(HttpStatus.NOT_IMPLEMENTED);
    }

    @Autowired
    private CustomerSegmentsService customerSegmentsService;

    @CrossOrigin
    public ResponseEntity<ResultSetSegments> dictionarySegmentGet(@ApiParam(value = "" ) @RequestHeader(value="X-Request-ID", required=false) UUID xRequestID) {

        List<Segment> segments = customerSegmentsService.getAllSegments();

        return ResponseEntity.ok(ResultSetSegments.builder()
                .status(Status.OK)
                .data(segments)
                .count(segments.size())
                .build());
    }

    public ResponseEntity<ResultSetSegment> dictionarySegmentPost(@ApiParam(value = "Structure of the objects to be create with all fields to be populated." ,required=true )  @Valid @RequestBody RequestSetSegment body,@ApiParam(value = "" ) @RequestHeader(value="X-Request-ID", required=false) UUID xRequestID) {

        return new ResponseEntity<ResultSetSegment>(HttpStatus.NOT_IMPLEMENTED);
    }

}
