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
 * Account
 */
@Validated
@javax.annotation.Generated(value = "io.swagger.codegen.languages.SpringCodegen", date = "2019-09-06T13:08:35.508Z")

public class Account   {
  @JsonProperty("releaseId")
  private Integer releaseId = null;

  @JsonProperty("status")
  private String status = null;

  @JsonProperty("bscsAccount")
  private String bscsAccount = null;

  @JsonProperty("ofiSapAccount")
  private String ofiSapAccount = null;

  @JsonProperty("validFromDate")
  private LocalDate validFromDate = null;

  @JsonProperty("vatCodeInd")
  private String vatCodeInd = null;

  @JsonProperty("sapSegmText")
  private String sapSegmText = null;

  @JsonProperty("ofiSapWbsCode")
  private String ofiSapWbsCode = null;

  @JsonProperty("citMarkerVatFlag")
  private Integer citMarkerVatFlag = null;

  public Account releaseId(Integer releaseId) {
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

  public Account status(String status) {
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

  public Account bscsAccount(String bscsAccount) {
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

  public Account ofiSapAccount(String ofiSapAccount) {
    this.ofiSapAccount = ofiSapAccount;
    return this;
  }

  /**
   * Get ofiSapAccount
   * @return ofiSapAccount
  **/
  @ApiModelProperty(value = "")


  public String getOfiSapAccount() {
    return ofiSapAccount;
  }

  public void setOfiSapAccount(String ofiSapAccount) {
    this.ofiSapAccount = ofiSapAccount;
  }

  public Account validFromDate(LocalDate validFromDate) {
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

  public Account vatCodeInd(String vatCodeInd) {
    this.vatCodeInd = vatCodeInd;
    return this;
  }

  /**
   * Get vatCodeInd
   * @return vatCodeInd
  **/
  @ApiModelProperty(value = "")


  public String getVatCodeInd() {
    return vatCodeInd;
  }

  public void setVatCodeInd(String vatCodeInd) {
    this.vatCodeInd = vatCodeInd;
  }

  public Account sapSegmText(String sapSegmText) {
    this.sapSegmText = sapSegmText;
    return this;
  }

  /**
   * Get sapSegmText
   * @return sapSegmText
  **/
  @ApiModelProperty(value = "")


  public String getSapSegmText() {
    return sapSegmText;
  }

  public void setSapSegmText(String sapSegmText) {
    this.sapSegmText = sapSegmText;
  }

  public Account ofiSapWbsCode(String ofiSapWbsCode) {
    this.ofiSapWbsCode = ofiSapWbsCode;
    return this;
  }

  /**
   * Get ofiSapWbsCode
   * @return ofiSapWbsCode
  **/
  @ApiModelProperty(value = "")


  public String getOfiSapWbsCode() {
    return ofiSapWbsCode;
  }

  public void setOfiSapWbsCode(String ofiSapWbsCode) {
    this.ofiSapWbsCode = ofiSapWbsCode;
  }

  public Account citMarkerVatFlag(Integer citMarkerVatFlag) {
    this.citMarkerVatFlag = citMarkerVatFlag;
    return this;
  }

  /**
   * Get citMarkerVatFlag
   * @return citMarkerVatFlag
  **/
  @ApiModelProperty(value = "")


  public Integer getCitMarkerVatFlag() {
    return citMarkerVatFlag;
  }

  public void setCitMarkerVatFlag(Integer citMarkerVatFlag) {
    this.citMarkerVatFlag = citMarkerVatFlag;
  }


  @Override
  public boolean equals(java.lang.Object o) {
    if (this == o) {
      return true;
    }
    if (o == null || getClass() != o.getClass()) {
      return false;
    }
    Account account = (Account) o;
    return Objects.equals(this.releaseId, account.releaseId) &&
        Objects.equals(this.status, account.status) &&
        Objects.equals(this.bscsAccount, account.bscsAccount) &&
        Objects.equals(this.ofiSapAccount, account.ofiSapAccount) &&
        Objects.equals(this.validFromDate, account.validFromDate) &&
        Objects.equals(this.vatCodeInd, account.vatCodeInd) &&
        Objects.equals(this.sapSegmText, account.sapSegmText) &&
        Objects.equals(this.ofiSapWbsCode, account.ofiSapWbsCode) &&
        Objects.equals(this.citMarkerVatFlag, account.citMarkerVatFlag);
  }

  @Override
  public int hashCode() {
    return Objects.hash(releaseId, status, bscsAccount, ofiSapAccount, validFromDate, vatCodeInd, sapSegmText, ofiSapWbsCode, citMarkerVatFlag);
  }

  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class Account {\n");
    
    sb.append("    releaseId: ").append(toIndentedString(releaseId)).append("\n");
    sb.append("    status: ").append(toIndentedString(status)).append("\n");
    sb.append("    bscsAccount: ").append(toIndentedString(bscsAccount)).append("\n");
    sb.append("    ofiSapAccount: ").append(toIndentedString(ofiSapAccount)).append("\n");
    sb.append("    validFromDate: ").append(toIndentedString(validFromDate)).append("\n");
    sb.append("    vatCodeInd: ").append(toIndentedString(vatCodeInd)).append("\n");
    sb.append("    sapSegmText: ").append(toIndentedString(sapSegmText)).append("\n");
    sb.append("    ofiSapWbsCode: ").append(toIndentedString(ofiSapWbsCode)).append("\n");
    sb.append("    citMarkerVatFlag: ").append(toIndentedString(citMarkerVatFlag)).append("\n");
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

