package io.swagger.model;

import java.util.Objects;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonCreator;
import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import org.threeten.bp.LocalDate;
import org.springframework.validation.annotation.Validated;
import javax.validation.Valid;
import javax.validation.constraints.*;

/**
 * Order
 */
@Validated
@javax.annotation.Generated(value = "io.swagger.codegen.languages.SpringCodegen", date = "2019-09-06T13:08:35.508Z")

public class Order   {
  @JsonProperty("releaseId")
  private Integer releaseId = null;

  @JsonProperty("status")
  private String status = null;

  @JsonProperty("bscsAccount")
  private String bscsAccount = null;

  @JsonProperty("segmentCode")
  private String segmentCode = null;

  @JsonProperty("orderNumber")
  private String orderNumber = null;

  @JsonProperty("validFromDate")
  private LocalDate validFromDate = null;

  public Order releaseId(Integer releaseId) {
    this.releaseId = releaseId;
    return this;
  }

  /**
   * Get releaseId
   * @return releaseId
  **/
  @ApiModelProperty(value = "")


  public Integer getReleaseId() {
    return releaseId;
  }

  public void setReleaseId(Integer releaseId) {
    this.releaseId = releaseId;
  }

  public Order status(String status) {
    this.status = status;
    return this;
  }

  /**
   * Get status
   * @return status
  **/
  @ApiModelProperty(value = "")


  public String getStatus() {
    return status;
  }

  public void setStatus(String status) {
    this.status = status;
  }

  public Order bscsAccount(String bscsAccount) {
    this.bscsAccount = bscsAccount;
    return this;
  }

  /**
   * Get bscsAccount
   * @return bscsAccount
  **/
  @ApiModelProperty(value = "")


  public String getBscsAccount() {
    return bscsAccount;
  }

  public void setBscsAccount(String bscsAccount) {
    this.bscsAccount = bscsAccount;
  }

  public Order segmentCode(String segmentCode) {
    this.segmentCode = segmentCode;
    return this;
  }

  /**
   * Get segmentCode
   * @return segmentCode
  **/
  @ApiModelProperty(value = "")


  public String getSegmentCode() {
    return segmentCode;
  }

  public void setSegmentCode(String segmentCode) {
    this.segmentCode = segmentCode;
  }

  public Order orderNumber(String orderNumber) {
    this.orderNumber = orderNumber;
    return this;
  }

  /**
   * Get orderNumber
   * @return orderNumber
  **/
  @ApiModelProperty(value = "")


  public String getOrderNumber() {
    return orderNumber;
  }

  public void setOrderNumber(String orderNumber) {
    this.orderNumber = orderNumber;
  }

  public Order validFromDate(LocalDate validFromDate) {
    this.validFromDate = validFromDate;
    return this;
  }

  /**
   * Get validFromDate
   * @return validFromDate
  **/
  @ApiModelProperty(value = "")

  @Valid

  public LocalDate getValidFromDate() {
    return validFromDate;
  }

  public void setValidFromDate(LocalDate validFromDate) {
    this.validFromDate = validFromDate;
  }


  @Override
  public boolean equals(java.lang.Object o) {
    if (this == o) {
      return true;
    }
    if (o == null || getClass() != o.getClass()) {
      return false;
    }
    Order order = (Order) o;
    return Objects.equals(this.releaseId, order.releaseId) &&
        Objects.equals(this.status, order.status) &&
        Objects.equals(this.bscsAccount, order.bscsAccount) &&
        Objects.equals(this.segmentCode, order.segmentCode) &&
        Objects.equals(this.orderNumber, order.orderNumber) &&
        Objects.equals(this.validFromDate, order.validFromDate);
  }

  @Override
  public int hashCode() {
    return Objects.hash(releaseId, status, bscsAccount, segmentCode, orderNumber, validFromDate);
  }

  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class Order {\n");
    
    sb.append("    releaseId: ").append(toIndentedString(releaseId)).append("\n");
    sb.append("    status: ").append(toIndentedString(status)).append("\n");
    sb.append("    bscsAccount: ").append(toIndentedString(bscsAccount)).append("\n");
    sb.append("    segmentCode: ").append(toIndentedString(segmentCode)).append("\n");
    sb.append("    orderNumber: ").append(toIndentedString(orderNumber)).append("\n");
    sb.append("    validFromDate: ").append(toIndentedString(validFromDate)).append("\n");
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

