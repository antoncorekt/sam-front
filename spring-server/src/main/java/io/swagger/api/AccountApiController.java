package io.swagger.api;

import io.swagger.model.RequestSetAccount;
import io.swagger.model.ResultSetAccount;
import io.swagger.model.ResultSetAccounts;
import io.swagger.model.ResultSetCount;
import io.swagger.model.ResultSetError;
import io.swagger.model.ResultSetOk;
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
public class AccountApiController implements AccountApi {

    private static final Logger log = LoggerFactory.getLogger(AccountApiController.class);

    private final ObjectMapper objectMapper;

    private final HttpServletRequest request;

    @org.springframework.beans.factory.annotation.Autowired
    public AccountApiController(ObjectMapper objectMapper, HttpServletRequest request) {
        this.objectMapper = objectMapper;
        this.request = request;
    }

    public ResponseEntity<ResultSetCount> accountBscsAccountByStatusAndReleaseDelete(@ApiParam(value = "status of the package, W for work P for production",required=true, allowableValues = "\"W\", \"C\", \"P\"") @PathVariable("status") String status,@ApiParam(value = "release sequential number, 0 for work, else production or last",required=true, allowableValues = "\"0\", \"last\"") @PathVariable("release") String release,@ApiParam(value = "BSCS account number",required=true) @PathVariable("bscsAccount") String bscsAccount,@ApiParam(value = "" ) @RequestHeader(value="X-Request-ID", required=false) UUID xRequestID) {
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

    public ResponseEntity<ResultSetAccounts> accountBscsAccountByStatusAndReleasePut(@ApiParam(value = "status of the package, W for workm P for production",required=true, allowableValues = "\"W\", \"C\", \"P\"") @PathVariable("status") String status,@ApiParam(value = "release sequential number, 0 for work, else production or last for latst version",required=true, allowableValues = "\"0\", \"last\"") @PathVariable("release") String release,@ApiParam(value = "BSCS account code",required=true) @PathVariable("bscsAccount") String bscsAccount,@ApiParam(value = "" ) @RequestHeader(value="X-Request-ID", required=false) UUID xRequestID) {
        String accept = request.getHeader("Accept");
        if (accept != null && accept.contains("application/json")) {
            try {
                return new ResponseEntity<ResultSetAccounts>(objectMapper.readValue("{  \"data\" : [ {    \"releaseId\" : 0,    \"status\" : \"W\",    \"bscsAccount\" : \"BSCSACCOUNT\",    \"ofiSapAccount\" : \"OFISAPACCOUNT\",    \"validFromDate\" : { },    \"vatCodeInd\" : \"VATCODEIND\",    \"sapSegmText\" : \"SAPSEGMTEXT\",    \"ofiSapWbsCode\" : \"OFISAPWBSCODE\",    \"citMarkerVatFlag\" : 0  }, {    \"releaseId\" : 0,    \"status\" : \"W\",    \"bscsAccount\" : \"BSCSACCOUNT\",    \"ofiSapAccount\" : \"OFISAPACCOUNT\",    \"validFromDate\" : { },    \"vatCodeInd\" : \"VATCODEIND\",    \"sapSegmText\" : \"SAPSEGMTEXT\",    \"ofiSapWbsCode\" : \"OFISAPWBSCODE\",    \"citMarkerVatFlag\" : 0  } ],  \"count\" : 0,  \"status\" : \"Ok\"}", ResultSetAccounts.class), HttpStatus.NOT_IMPLEMENTED);
            } catch (IOException e) {
                log.error("Couldn't serialize response for content type application/json", e);
                return new ResponseEntity<ResultSetAccounts>(HttpStatus.INTERNAL_SERVER_ERROR);
            }
        }

        return new ResponseEntity<ResultSetAccounts>(HttpStatus.NOT_IMPLEMENTED);
    }

    public ResponseEntity<ResultSetAccounts> accountByStatusAndReleaseGet(@ApiParam(value = "status of the package, W for workm P for production",required=true, allowableValues = "\"W\", \"C\", \"P\"") @PathVariable("status") String status,@ApiParam(value = "release sequential number, 0 for work, else production",required=true, allowableValues = "\"0\", \"last\"") @PathVariable("release") String release,@ApiParam(value = "" ) @RequestHeader(value="X-Request-ID", required=false) UUID xRequestID) {
        String accept = request.getHeader("Accept");
        if (accept != null && accept.contains("application/json")) {
            try {
                return new ResponseEntity<ResultSetAccounts>(objectMapper.readValue("{  \"data\" : [ {    \"releaseId\" : 0,    \"status\" : \"W\",    \"bscsAccount\" : \"BSCSACCOUNT\",    \"ofiSapAccount\" : \"OFISAPACCOUNT\",    \"validFromDate\" : { },    \"vatCodeInd\" : \"VATCODEIND\",    \"sapSegmText\" : \"SAPSEGMTEXT\",    \"ofiSapWbsCode\" : \"OFISAPWBSCODE\",    \"citMarkerVatFlag\" : 0  }, {    \"releaseId\" : 0,    \"status\" : \"W\",    \"bscsAccount\" : \"BSCSACCOUNT\",    \"ofiSapAccount\" : \"OFISAPACCOUNT\",    \"validFromDate\" : { },    \"vatCodeInd\" : \"VATCODEIND\",    \"sapSegmText\" : \"SAPSEGMTEXT\",    \"ofiSapWbsCode\" : \"OFISAPWBSCODE\",    \"citMarkerVatFlag\" : 0  } ],  \"count\" : 0,  \"status\" : \"Ok\"}", ResultSetAccounts.class), HttpStatus.NOT_IMPLEMENTED);
            } catch (IOException e) {
                log.error("Couldn't serialize response for content type application/json", e);
                return new ResponseEntity<ResultSetAccounts>(HttpStatus.INTERNAL_SERVER_ERROR);
            }
        }

        return new ResponseEntity<ResultSetAccounts>(HttpStatus.NOT_IMPLEMENTED);
    }

    public ResponseEntity<ResultSetCount> accountDelete(@ApiParam(value = "" ) @RequestHeader(value="X-Request-ID", required=false) UUID xRequestID) {
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

    public ResponseEntity<ResultSetAccount> accountPost(@ApiParam(value = "Creation of object Account" ,required=true )  @Valid @RequestBody RequestSetAccount body,@ApiParam(value = "" ) @RequestHeader(value="X-Request-ID", required=false) UUID xRequestID) {
        String accept = request.getHeader("Accept");
        if (accept != null && accept.contains("application/json")) {
            try {
                return new ResponseEntity<ResultSetAccount>(objectMapper.readValue("{  \"data\" : {    \"releaseId\" : 0,    \"status\" : \"W\",    \"bscsAccount\" : \"BSCSACCOUNT\",    \"ofiSapAccount\" : \"OFISAPACCOUNT\",    \"validFromDate\" : { },    \"vatCodeInd\" : \"VATCODEIND\",    \"sapSegmText\" : \"SAPSEGMTEXT\",    \"ofiSapWbsCode\" : \"OFISAPWBSCODE\",    \"citMarkerVatFlag\" : 0  },  \"status\" : \"Ok\"}", ResultSetAccount.class), HttpStatus.NOT_IMPLEMENTED);
            } catch (IOException e) {
                log.error("Couldn't serialize response for content type application/json", e);
                return new ResponseEntity<ResultSetAccount>(HttpStatus.INTERNAL_SERVER_ERROR);
            }
        }

        return new ResponseEntity<ResultSetAccount>(HttpStatus.NOT_IMPLEMENTED);
    }

    public ResponseEntity<ResultSetOk> accountReleasePost(@ApiParam(value = "" ) @RequestHeader(value="X-Request-ID", required=false) UUID xRequestID) {
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
