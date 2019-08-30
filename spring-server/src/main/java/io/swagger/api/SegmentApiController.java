package io.swagger.api;

import io.swagger.model.MarketSegment;
import io.swagger.model.MarketSegmentReq;
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
@javax.annotation.Generated(value = "io.swagger.codegen.languages.SpringCodegen", date = "2019-08-30T09:02:23.196Z")

@Controller
public class SegmentApiController implements SegmentApi {

    private static final Logger log = LoggerFactory.getLogger(SegmentApiController.class);

    private final ObjectMapper objectMapper;

    private final HttpServletRequest request;

    @org.springframework.beans.factory.annotation.Autowired
    public SegmentApiController(ObjectMapper objectMapper, HttpServletRequest request) {
        this.objectMapper = objectMapper;
        this.request = request;
    }

    public ResponseEntity<Void> addSegment(@ApiParam(value = "Market Segment that needs to be added to the dictionary" ,required=true )  @Valid @RequestBody MarketSegmentReq body) {
        String accept = request.getHeader("Accept");
        return new ResponseEntity<Void>(HttpStatus.NOT_IMPLEMENTED);
    }

    public ResponseEntity<Void> deleteSegment(@ApiParam(value = "",required=true) @PathVariable("segmentId") String segmentId) {
        String accept = request.getHeader("Accept");
        return new ResponseEntity<Void>(HttpStatus.NOT_IMPLEMENTED);
    }

    public ResponseEntity<List<MarketSegment>> getAllSegments() {
        String accept = request.getHeader("Accept");
        if (accept != null && accept.contains("application/json")) {
            try {
                return new ResponseEntity<List<MarketSegment>>(objectMapper.readValue("[ {  \"entryDate\" : \"2000-01-23T04:56:07.000+00:00\",  \"id\" : \"id\",  \"category\" : \"BIZ\"}, {  \"entryDate\" : \"2000-01-23T04:56:07.000+00:00\",  \"id\" : \"id\",  \"category\" : \"BIZ\"} ]", List.class), HttpStatus.NOT_IMPLEMENTED);
            } catch (IOException e) {
                log.error("Couldn't serialize response for content type application/json", e);
                return new ResponseEntity<List<MarketSegment>>(HttpStatus.INTERNAL_SERVER_ERROR);
            }
        }

        return new ResponseEntity<List<MarketSegment>>(HttpStatus.NOT_IMPLEMENTED);
    }

    public ResponseEntity<MarketSegment> getSegment(@ApiParam(value = "",required=true) @PathVariable("segmentId") String segmentId) {
        String accept = request.getHeader("Accept");
        if (accept != null && accept.contains("application/json")) {
            try {
                return new ResponseEntity<MarketSegment>(objectMapper.readValue("{  \"entryDate\" : \"2000-01-23T04:56:07.000+00:00\",  \"id\" : \"id\",  \"category\" : \"BIZ\"}", MarketSegment.class), HttpStatus.NOT_IMPLEMENTED);
            } catch (IOException e) {
                log.error("Couldn't serialize response for content type application/json", e);
                return new ResponseEntity<MarketSegment>(HttpStatus.INTERNAL_SERVER_ERROR);
            }
        }

        return new ResponseEntity<MarketSegment>(HttpStatus.NOT_IMPLEMENTED);
    }

}
