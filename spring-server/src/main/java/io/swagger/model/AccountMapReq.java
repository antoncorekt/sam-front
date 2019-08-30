package io.swagger.model;

import java.util.Objects;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonCreator;
import com.fasterxml.jackson.annotation.JsonValue;
import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import org.threeten.bp.LocalDate;
import org.springframework.validation.annotation.Validated;
import javax.validation.Valid;
import javax.validation.constraints.*;

/**
 * AccountMapReq
 */
@Validated
@javax.annotation.Generated(value = "io.swagger.codegen.languages.SpringCodegen", date = "2019-08-30T09:02:23.196Z")

public class AccountMapReq   {
  @JsonProperty("glAccountId")
  private String glAccountId = null;

  @JsonProperty("ofiAccountId")
  private String ofiAccountId = null;

  @JsonProperty("validFrom")
  private LocalDate validFrom = null;

  @JsonProperty("vatCodeInd")
  private Boolean vatCodeInd = null;

  @JsonProperty("sapSegmentText")
  private String sapSegmentText = null;

  @JsonProperty("ofiWbsCode")
  private String ofiWbsCode = null;

  /**
   * Gets or Sets citMarkerVatFlag
   */
  public enum CitMarkerVatFlagEnum {
    NUMBER_0(0),
    
    NUMBER_1(1);

    private Integer value;

    CitMarkerVatFlagEnum(Integer value) {
      this.value = value;
    }

    @Override
    @JsonValue
    public String toString() {
      return String.valueOf(value);
    }

    @JsonCreator
    public static CitMarkerVatFlagEnum fromValue(String text) {
      for (CitMarkerVatFlagEnum b : CitMarkerVatFlagEnum.values()) {
        if (String.valueOf(b.value).equals(text)) {
          return b;
        }
      }
      return null;
    }
  }

  @JsonProperty("citMarkerVatFlag")
  private CitMarkerVatFlagEnum citMarkerVatFlag = null;

  public AccountMapReq glAccountId(String glAccountId) {
    this.glAccountId = glAccountId;
    return this;
  }

  /**
   * BSCS GL account number
   * @return glAccountId
  **/
  @ApiModelProperty(required = true, value = "BSCS GL account number")
  @NotNull

@Size(max=30) 
  public String getGlAccountId() {
    return glAccountId;
  }

  public void setGlAccountId(String glAccountId) {
    this.glAccountId = glAccountId;
  }

  public AccountMapReq ofiAccountId(String ofiAccountId) {
    this.ofiAccountId = ofiAccountId;
    return this;
  }

  /**
   * SAP OFI account number
   * @return ofiAccountId
  **/
  @ApiModelProperty(required = true, value = "SAP OFI account number")
  @NotNull

@Size(max=30) 
  public String getOfiAccountId() {
    return ofiAccountId;
  }

  public void setOfiAccountId(String ofiAccountId) {
    this.ofiAccountId = ofiAccountId;
  }

  public AccountMapReq validFrom(LocalDate validFrom) {
    this.validFrom = validFrom;
    return this;
  }

  /**
   * Start date of the mapping validity. Must be first day of the month
   * @return validFrom
  **/
  @ApiModelProperty(required = true, value = "Start date of the mapping validity. Must be first day of the month")
  @NotNull

  @Valid

  public LocalDate getValidFrom() {
    return validFrom;
  }

  public void setValidFrom(LocalDate validFrom) {
    this.validFrom = validFrom;
  }

  public AccountMapReq vatCodeInd(Boolean vatCodeInd) {
    this.vatCodeInd = vatCodeInd;
    return this;
  }

  /**
   * Get vatCodeInd
   * @return vatCodeInd
  **/
  @ApiModelProperty(value = "")


  public Boolean isVatCodeInd() {
    return vatCodeInd;
  }

  public void setVatCodeInd(Boolean vatCodeInd) {
    this.vatCodeInd = vatCodeInd;
  }

  public AccountMapReq sapSegmentText(String sapSegmentText) {
    this.sapSegmentText = sapSegmentText;
    return this;
  }

  /**
   * Get sapSegmentText
   * @return sapSegmentText
  **/
  @ApiModelProperty(value = "")

@Size(max=120) 
  public String getSapSegmentText() {
    return sapSegmentText;
  }

  public void setSapSegmentText(String sapSegmentText) {
    this.sapSegmentText = sapSegmentText;
  }

  public AccountMapReq ofiWbsCode(String ofiWbsCode) {
    this.ofiWbsCode = ofiWbsCode;
    return this;
  }

  /**
   * SAP OFI WBS code. Work Breakdown Structure Element
   * @return ofiWbsCode
  **/
  @ApiModelProperty(value = "SAP OFI WBS code. Work Breakdown Structure Element")

@Size(max=24) 
  public String getOfiWbsCode() {
    return ofiWbsCode;
  }

  public void setOfiWbsCode(String ofiWbsCode) {
    this.ofiWbsCode = ofiWbsCode;
  }

  public AccountMapReq citMarkerVatFlag(CitMarkerVatFlagEnum citMarkerVatFlag) {
    this.citMarkerVatFlag = citMarkerVatFlag;
    return this;
  }

  /**
   * Get citMarkerVatFlag
   * @return citMarkerVatFlag
  **/
  @ApiModelProperty(value = "")


  public CitMarkerVatFlagEnum getCitMarkerVatFlag() {
    return citMarkerVatFlag;
  }

  public void setCitMarkerVatFlag(CitMarkerVatFlagEnum citMarkerVatFlag) {
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
    AccountMapReq accountMapReq = (AccountMapReq) o;
    return Objects.equals(this.glAccountId, accountMapReq.glAccountId) &&
        Objects.equals(this.ofiAccountId, accountMapReq.ofiAccountId) &&
        Objects.equals(this.validFrom, accountMapReq.validFrom) &&
        Objects.equals(this.vatCodeInd, accountMapReq.vatCodeInd) &&
        Objects.equals(this.sapSegmentText, accountMapReq.sapSegmentText) &&
        Objects.equals(this.ofiWbsCode, accountMapReq.ofiWbsCode) &&
        Objects.equals(this.citMarkerVatFlag, accountMapReq.citMarkerVatFlag);
  }

  @Override
  public int hashCode() {
    return Objects.hash(glAccountId, ofiAccountId, validFrom, vatCodeInd, sapSegmentText, ofiWbsCode, citMarkerVatFlag);
  }

  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class AccountMapReq {\n");
    
    sb.append("    glAccountId: ").append(toIndentedString(glAccountId)).append("\n");
    sb.append("    ofiAccountId: ").append(toIndentedString(ofiAccountId)).append("\n");
    sb.append("    validFrom: ").append(toIndentedString(validFrom)).append("\n");
    sb.append("    vatCodeInd: ").append(toIndentedString(vatCodeInd)).append("\n");
    sb.append("    sapSegmentText: ").append(toIndentedString(sapSegmentText)).append("\n");
    sb.append("    ofiWbsCode: ").append(toIndentedString(ofiWbsCode)).append("\n");
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

