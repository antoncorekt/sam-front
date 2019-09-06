package io.swagger.model;

import java.util.Objects;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonCreator;
import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import io.swagger.model.Status;
import org.springframework.validation.annotation.Validated;
import javax.validation.Valid;
import javax.validation.constraints.*;

/**
 * ResultSetStatus
 */
@Validated
@javax.annotation.Generated(value = "io.swagger.codegen.languages.SpringCodegen", date = "2019-09-06T13:08:35.508Z")

public class ResultSetStatus   {
  @JsonProperty("status")
  private Status status = null;

  @JsonProperty("memoryAlloc")
  private Integer memoryAlloc = null;

  @JsonProperty("memoryTotalAlloc")
  private Integer memoryTotalAlloc = null;

  @JsonProperty("memorySys")
  private Integer memorySys = null;

  @JsonProperty("memoryNMalloc")
  private Integer memoryNMalloc = null;

  @JsonProperty("memoryNFree")
  private Integer memoryNFree = null;

  @JsonProperty("processedRequests")
  private Integer processedRequests = null;

  @JsonProperty("processedRequestsErrors")
  private Integer processedRequestsErrors = null;

  @JsonProperty("processedRequestsOk")
  private Integer processedRequestsOk = null;

  @JsonProperty("processingTimeTotalSec")
  private Double processingTimeTotalSec = null;

  @JsonProperty("runningSince")
  private String runningSince = null;

  public ResultSetStatus status(Status status) {
    this.status = status;
    return this;
  }

  /**
   * Get status
   * @return status
  **/
  @ApiModelProperty(value = "")

  @Valid

  public Status getStatus() {
    return status;
  }

  public void setStatus(Status status) {
    this.status = status;
  }

  public ResultSetStatus memoryAlloc(Integer memoryAlloc) {
    this.memoryAlloc = memoryAlloc;
    return this;
  }

  /**
   * Get memoryAlloc
   * @return memoryAlloc
  **/
  @ApiModelProperty(value = "")


  public Integer getMemoryAlloc() {
    return memoryAlloc;
  }

  public void setMemoryAlloc(Integer memoryAlloc) {
    this.memoryAlloc = memoryAlloc;
  }

  public ResultSetStatus memoryTotalAlloc(Integer memoryTotalAlloc) {
    this.memoryTotalAlloc = memoryTotalAlloc;
    return this;
  }

  /**
   * Get memoryTotalAlloc
   * @return memoryTotalAlloc
  **/
  @ApiModelProperty(value = "")


  public Integer getMemoryTotalAlloc() {
    return memoryTotalAlloc;
  }

  public void setMemoryTotalAlloc(Integer memoryTotalAlloc) {
    this.memoryTotalAlloc = memoryTotalAlloc;
  }

  public ResultSetStatus memorySys(Integer memorySys) {
    this.memorySys = memorySys;
    return this;
  }

  /**
   * Get memorySys
   * @return memorySys
  **/
  @ApiModelProperty(value = "")


  public Integer getMemorySys() {
    return memorySys;
  }

  public void setMemorySys(Integer memorySys) {
    this.memorySys = memorySys;
  }

  public ResultSetStatus memoryNMalloc(Integer memoryNMalloc) {
    this.memoryNMalloc = memoryNMalloc;
    return this;
  }

  /**
   * Get memoryNMalloc
   * @return memoryNMalloc
  **/
  @ApiModelProperty(value = "")


  public Integer getMemoryNMalloc() {
    return memoryNMalloc;
  }

  public void setMemoryNMalloc(Integer memoryNMalloc) {
    this.memoryNMalloc = memoryNMalloc;
  }

  public ResultSetStatus memoryNFree(Integer memoryNFree) {
    this.memoryNFree = memoryNFree;
    return this;
  }

  /**
   * Get memoryNFree
   * @return memoryNFree
  **/
  @ApiModelProperty(value = "")


  public Integer getMemoryNFree() {
    return memoryNFree;
  }

  public void setMemoryNFree(Integer memoryNFree) {
    this.memoryNFree = memoryNFree;
  }

  public ResultSetStatus processedRequests(Integer processedRequests) {
    this.processedRequests = processedRequests;
    return this;
  }

  /**
   * Get processedRequests
   * @return processedRequests
  **/
  @ApiModelProperty(value = "")


  public Integer getProcessedRequests() {
    return processedRequests;
  }

  public void setProcessedRequests(Integer processedRequests) {
    this.processedRequests = processedRequests;
  }

  public ResultSetStatus processedRequestsErrors(Integer processedRequestsErrors) {
    this.processedRequestsErrors = processedRequestsErrors;
    return this;
  }

  /**
   * Get processedRequestsErrors
   * @return processedRequestsErrors
  **/
  @ApiModelProperty(value = "")


  public Integer getProcessedRequestsErrors() {
    return processedRequestsErrors;
  }

  public void setProcessedRequestsErrors(Integer processedRequestsErrors) {
    this.processedRequestsErrors = processedRequestsErrors;
  }

  public ResultSetStatus processedRequestsOk(Integer processedRequestsOk) {
    this.processedRequestsOk = processedRequestsOk;
    return this;
  }

  /**
   * Get processedRequestsOk
   * @return processedRequestsOk
  **/
  @ApiModelProperty(value = "")


  public Integer getProcessedRequestsOk() {
    return processedRequestsOk;
  }

  public void setProcessedRequestsOk(Integer processedRequestsOk) {
    this.processedRequestsOk = processedRequestsOk;
  }

  public ResultSetStatus processingTimeTotalSec(Double processingTimeTotalSec) {
    this.processingTimeTotalSec = processingTimeTotalSec;
    return this;
  }

  /**
   * Get processingTimeTotalSec
   * @return processingTimeTotalSec
  **/
  @ApiModelProperty(value = "")


  public Double getProcessingTimeTotalSec() {
    return processingTimeTotalSec;
  }

  public void setProcessingTimeTotalSec(Double processingTimeTotalSec) {
    this.processingTimeTotalSec = processingTimeTotalSec;
  }

  public ResultSetStatus runningSince(String runningSince) {
    this.runningSince = runningSince;
    return this;
  }

  /**
   * Get runningSince
   * @return runningSince
  **/
  @ApiModelProperty(value = "")


  public String getRunningSince() {
    return runningSince;
  }

  public void setRunningSince(String runningSince) {
    this.runningSince = runningSince;
  }


  @Override
  public boolean equals(java.lang.Object o) {
    if (this == o) {
      return true;
    }
    if (o == null || getClass() != o.getClass()) {
      return false;
    }
    ResultSetStatus resultSetStatus = (ResultSetStatus) o;
    return Objects.equals(this.status, resultSetStatus.status) &&
        Objects.equals(this.memoryAlloc, resultSetStatus.memoryAlloc) &&
        Objects.equals(this.memoryTotalAlloc, resultSetStatus.memoryTotalAlloc) &&
        Objects.equals(this.memorySys, resultSetStatus.memorySys) &&
        Objects.equals(this.memoryNMalloc, resultSetStatus.memoryNMalloc) &&
        Objects.equals(this.memoryNFree, resultSetStatus.memoryNFree) &&
        Objects.equals(this.processedRequests, resultSetStatus.processedRequests) &&
        Objects.equals(this.processedRequestsErrors, resultSetStatus.processedRequestsErrors) &&
        Objects.equals(this.processedRequestsOk, resultSetStatus.processedRequestsOk) &&
        Objects.equals(this.processingTimeTotalSec, resultSetStatus.processingTimeTotalSec) &&
        Objects.equals(this.runningSince, resultSetStatus.runningSince);
  }

  @Override
  public int hashCode() {
    return Objects.hash(status, memoryAlloc, memoryTotalAlloc, memorySys, memoryNMalloc, memoryNFree, processedRequests, processedRequestsErrors, processedRequestsOk, processingTimeTotalSec, runningSince);
  }

  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class ResultSetStatus {\n");
    
    sb.append("    status: ").append(toIndentedString(status)).append("\n");
    sb.append("    memoryAlloc: ").append(toIndentedString(memoryAlloc)).append("\n");
    sb.append("    memoryTotalAlloc: ").append(toIndentedString(memoryTotalAlloc)).append("\n");
    sb.append("    memorySys: ").append(toIndentedString(memorySys)).append("\n");
    sb.append("    memoryNMalloc: ").append(toIndentedString(memoryNMalloc)).append("\n");
    sb.append("    memoryNFree: ").append(toIndentedString(memoryNFree)).append("\n");
    sb.append("    processedRequests: ").append(toIndentedString(processedRequests)).append("\n");
    sb.append("    processedRequestsErrors: ").append(toIndentedString(processedRequestsErrors)).append("\n");
    sb.append("    processedRequestsOk: ").append(toIndentedString(processedRequestsOk)).append("\n");
    sb.append("    processingTimeTotalSec: ").append(toIndentedString(processingTimeTotalSec)).append("\n");
    sb.append("    runningSince: ").append(toIndentedString(runningSince)).append("\n");
    sb.append("}");
    return sb.toString();
  }

  /**
   * Convert the given object to string with each line indented by 4 spaces
   * (except the first line).
   */
  private String toIndentedString(java.lang.Object o) {
    if (o == null) {
      return "null";
    }
    return o.toString().replace("\n", "\n    ");
  }
}

