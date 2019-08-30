package io.swagger.api;

import com.wipro.sam.dao.service.AccountService;
import io.swagger.model.AccountMap;
import io.swagger.model.AccountMapLog;
import io.swagger.model.FinancialAccount;
import io.swagger.model.InlineResponse201;
import org.threeten.bp.OffsetDateTime;
import com.fasterxml.jackson.databind.ObjectMapper;
import io.swagger.annotations.*;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
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
public class AccountApiController implements AccountApi {

    private static final Logger log = LoggerFactory.getLogger(AccountApiController.class);

    private final ObjectMapper objectMapper;

    private final HttpServletRequest request;

    private final AccountService accountService;

    @org.springframework.beans.factory.annotation.Autowired
    public AccountApiController(ObjectMapper objectMapper, HttpServletRequest request, AccountService accountService) {
        this.objectMapper = objectMapper;
        this.request = request;
        this.accountService = accountService;
    }

    public ResponseEntity<Void> addOFI(@ApiParam(value = "Financial Account that needs to be added to the dictionary" ,required=true )  @Valid @RequestBody FinancialAccount body) {
        String accept = request.getHeader("Accept");
        return new ResponseEntity<Void>(HttpStatus.NOT_IMPLEMENTED);
    }

    public ResponseEntity<Void> deleteOFI(@ApiParam(value = "ID of OFI account",required=true) @PathVariable("accountId") Long accountId,@ApiParam(value = "Financial Account that needs to be added to the dictionary" ,required=true )  @Valid @RequestBody FinancialAccount body) {
        String accept = request.getHeader("Accept");
        return new ResponseEntity<Void>(HttpStatus.NOT_IMPLEMENTED);
    }

    public ResponseEntity<List<FinancialAccount>> getAllGL(@ApiParam(value = "Account status filter", allowableValues = "active, inactive, all", defaultValue = "active") @Valid @RequestParam(value = "status", required = false, defaultValue="active") String status) {
        String accept = request.getHeader("Accept");

        return new ResponseEntity<List<FinancialAccount>>(accountService.getAllBscsAccount(), HttpStatus.OK);
    }

    public ResponseEntity<List<FinancialAccount>> getAllOFI(@ApiParam(value = "Account status filter", allowableValues = "active, inactive, all", defaultValue = "active") @Valid @RequestParam(value = "status", required = false, defaultValue="active") String status) {
        String accept = request.getHeader("Accept");
        if (accept != null && accept.contains("application/json")) {
            try {
                return new ResponseEntity<List<FinancialAccount>>(objectMapper.readValue("[ {  \"name\" : \"name\",  \"id\" : \"id\",  \"type\" : \"type\",  \"status\" : \"active\"}, {  \"name\" : \"name\",  \"id\" : \"id\",  \"type\" : \"type\",  \"status\" : \"active\"} ]", List.class), HttpStatus.NOT_IMPLEMENTED);
            } catch (IOException e) {
                log.error("Couldn't serialize response for content type application/json", e);
                return new ResponseEntity<List<FinancialAccount>>(HttpStatus.INTERNAL_SERVER_ERROR);
            }
        }

        return new ResponseEntity<List<FinancialAccount>>(HttpStatus.NOT_IMPLEMENTED);
    }

    public ResponseEntity<FinancialAccount> getGL(@Size(max=30) @ApiParam(value = "ID of GL account",required=true) @PathVariable("accountId") String accountId) {
        String accept = request.getHeader("Accept");
        if (accept != null && accept.contains("application/json")) {
            try {
                return new ResponseEntity<FinancialAccount>(objectMapper.readValue("{  \"name\" : \"name\",  \"id\" : \"id\",  \"type\" : \"type\",  \"status\" : \"active\"}", FinancialAccount.class), HttpStatus.NOT_IMPLEMENTED);
            } catch (IOException e) {
                log.error("Couldn't serialize response for content type application/json", e);
                return new ResponseEntity<FinancialAccount>(HttpStatus.INTERNAL_SERVER_ERROR);
            }
        }

        return new ResponseEntity<FinancialAccount>(HttpStatus.NOT_IMPLEMENTED);
    }

    public ResponseEntity<List<AccountMap>> getMap(@ApiParam(value = "Entry status filter", allowableValues = "approved, unapproved, all", defaultValue = "all") @Valid @RequestParam(value = "status", required = false, defaultValue="all") String status,@ApiParam(value = "BSCS GL account number") @Valid @RequestParam(value = "glAccount", required = false) String glAccount,@ApiParam(value = "SAP OFI account number") @Valid @RequestParam(value = "ofiAccount", required = false) String ofiAccount) {
        String accept = request.getHeader("Accept");
        if (accept != null && accept.contains("application/json")) {
            try {
                return new ResponseEntity<List<AccountMap>>(objectMapper.readValue("[ {  \"sapSegmentText\" : \"sapSegmentText\",  \"vatCodeInd\" : true,  \"ofiWbsCode\" : \"ofiWbsCode\",  \"ofiAccount\" : {    \"name\" : \"name\",    \"id\" : \"id\",    \"type\" : \"type\",    \"status\" : \"active\"  },  \"glAccount\" : {    \"name\" : \"name\",    \"id\" : \"id\",    \"type\" : \"type\",    \"status\" : \"active\"  },  \"validFrom\" : \"2000-01-23\",  \"citMarkerVatFlag\" : 0,  \"status\" : \"approved\"}, {  \"sapSegmentText\" : \"sapSegmentText\",  \"vatCodeInd\" : true,  \"ofiWbsCode\" : \"ofiWbsCode\",  \"ofiAccount\" : {    \"name\" : \"name\",    \"id\" : \"id\",    \"type\" : \"type\",    \"status\" : \"active\"  },  \"glAccount\" : {    \"name\" : \"name\",    \"id\" : \"id\",    \"type\" : \"type\",    \"status\" : \"active\"  },  \"validFrom\" : \"2000-01-23\",  \"citMarkerVatFlag\" : 0,  \"status\" : \"approved\"} ]", List.class), HttpStatus.NOT_IMPLEMENTED);
            } catch (IOException e) {
                log.error("Couldn't serialize response for content type application/json", e);
                return new ResponseEntity<List<AccountMap>>(HttpStatus.INTERNAL_SERVER_ERROR);
            }
        }

        return new ResponseEntity<List<AccountMap>>(HttpStatus.NOT_IMPLEMENTED);
    }

    public ResponseEntity<List<AccountMapLog>> getMapLog(@ApiParam(value = "Lower change date boundary.") @Valid @RequestParam(value = "dateFrom", required = false) OffsetDateTime dateFrom,@ApiParam(value = "Upper change date boundary.") @Valid @RequestParam(value = "dateTo", required = false) OffsetDateTime dateTo,@ApiParam(value = "User introducing the change") @Valid @RequestParam(value = "user", required = false) String user,@ApiParam(value = "BSCS GL account number") @Valid @RequestParam(value = "glAccount", required = false) String glAccount,@ApiParam(value = "SAP OFI account number") @Valid @RequestParam(value = "ofiAccount", required = false) String ofiAccount) {
        String accept = request.getHeader("Accept");
        if (accept != null && accept.contains("application/json")) {
            try {
                return new ResponseEntity<List<AccountMapLog>>(objectMapper.readValue("[ {  \"new\" : {    \"sapSegmentText\" : \"sapSegmentText\",    \"vatCodeInd\" : true,    \"ofiWbsCode\" : \"ofiWbsCode\",    \"ofiAccount\" : {      \"name\" : \"name\",      \"id\" : \"id\",      \"type\" : \"type\",      \"status\" : \"active\"    },    \"glAccount\" : {      \"name\" : \"name\",      \"id\" : \"id\",      \"type\" : \"type\",      \"status\" : \"active\"    },    \"validFrom\" : \"2000-01-23\",    \"citMarkerVatFlag\" : 0,    \"status\" : \"approved\"  },  \"old\" : {    \"sapSegmentText\" : \"sapSegmentText\",    \"vatCodeInd\" : true,    \"ofiWbsCode\" : \"ofiWbsCode\",    \"ofiAccount\" : {      \"name\" : \"name\",      \"id\" : \"id\",      \"type\" : \"type\",      \"status\" : \"active\"    },    \"glAccount\" : {      \"name\" : \"name\",      \"id\" : \"id\",      \"type\" : \"type\",      \"status\" : \"active\"    },    \"validFrom\" : \"2000-01-23\",    \"citMarkerVatFlag\" : 0,    \"status\" : \"approved\"  },  \"action\" : \"insert\",  \"user\" : \"user\",  \"actionDate\" : \"2000-01-23T04:56:07.000+00:00\"}, {  \"new\" : {    \"sapSegmentText\" : \"sapSegmentText\",    \"vatCodeInd\" : true,    \"ofiWbsCode\" : \"ofiWbsCode\",    \"ofiAccount\" : {      \"name\" : \"name\",      \"id\" : \"id\",      \"type\" : \"type\",      \"status\" : \"active\"    },    \"glAccount\" : {      \"name\" : \"name\",      \"id\" : \"id\",      \"type\" : \"type\",      \"status\" : \"active\"    },    \"validFrom\" : \"2000-01-23\",    \"citMarkerVatFlag\" : 0,    \"status\" : \"approved\"  },  \"old\" : {    \"sapSegmentText\" : \"sapSegmentText\",    \"vatCodeInd\" : true,    \"ofiWbsCode\" : \"ofiWbsCode\",    \"ofiAccount\" : {      \"name\" : \"name\",      \"id\" : \"id\",      \"type\" : \"type\",      \"status\" : \"active\"    },    \"glAccount\" : {      \"name\" : \"name\",      \"id\" : \"id\",      \"type\" : \"type\",      \"status\" : \"active\"    },    \"validFrom\" : \"2000-01-23\",    \"citMarkerVatFlag\" : 0,    \"status\" : \"approved\"  },  \"action\" : \"insert\",  \"user\" : \"user\",  \"actionDate\" : \"2000-01-23T04:56:07.000+00:00\"} ]", List.class), HttpStatus.NOT_IMPLEMENTED);
            } catch (IOException e) {
                log.error("Couldn't serialize response for content type application/json", e);
                return new ResponseEntity<List<AccountMapLog>>(HttpStatus.INTERNAL_SERVER_ERROR);
            }
        }

        return new ResponseEntity<List<AccountMapLog>>(HttpStatus.NOT_IMPLEMENTED);
    }

    public ResponseEntity<FinancialAccount> getOFI(@ApiParam(value = "ID of OFI account",required=true) @PathVariable("accountId") Long accountId) {
        String accept = request.getHeader("Accept");
        if (accept != null && accept.contains("application/json")) {
            try {
                return new ResponseEntity<FinancialAccount>(objectMapper.readValue("{  \"name\" : \"name\",  \"id\" : \"id\",  \"type\" : \"type\",  \"status\" : \"active\"}", FinancialAccount.class), HttpStatus.NOT_IMPLEMENTED);
            } catch (IOException e) {
                log.error("Couldn't serialize response for content type application/json", e);
                return new ResponseEntity<FinancialAccount>(HttpStatus.INTERNAL_SERVER_ERROR);
            }
        }

        return new ResponseEntity<FinancialAccount>(HttpStatus.NOT_IMPLEMENTED);
    }

    public ResponseEntity<InlineResponse201> importOFI(@ApiParam(value = "file detail") @Valid @RequestPart("file") MultipartFile file) {
        String accept = request.getHeader("Accept");
        if (accept != null && accept.contains("application/json")) {
            try {
                return new ResponseEntity<InlineResponse201>(objectMapper.readValue("{  \"new\" : 6,  \"imported\" : 0,  \"updated\" : 1}", InlineResponse201.class), HttpStatus.NOT_IMPLEMENTED);
            } catch (IOException e) {
                log.error("Couldn't serialize response for content type application/json", e);
                return new ResponseEntity<InlineResponse201>(HttpStatus.INTERNAL_SERVER_ERROR);
            }
        }

        return new ResponseEntity<InlineResponse201>(HttpStatus.NOT_IMPLEMENTED);
    }

    public ResponseEntity<Void> updateOFI(@ApiParam(value = "ID of OFI account",required=true) @PathVariable("accountId") Long accountId,@ApiParam(value = "Financial Account that needs to be added to the dictionary" ,required=true )  @Valid @RequestBody FinancialAccount body) {
        String accept = request.getHeader("Accept");
        return new ResponseEntity<Void>(HttpStatus.NOT_IMPLEMENTED);
    }

}
