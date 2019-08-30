package io.swagger.model;

import java.util.Objects;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonCreator;
import com.fasterxml.jackson.annotation.JsonValue;
import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import io.swagger.model.FinancialAccount;
import org.threeten.bp.LocalDate;
import org.springframework.validation.annotation.Validated;
import javax.validation.Valid;
import javax.validation.constraints.*;

/**
 * AccountMap
 */
@Validated
@javax.annotation.Generated(value = "io.swagger.codegen.languages.SpringCodegen", date = "2019-08-30T09:02:23.196Z")

public class AccountMap   {
  @JsonProperty("glAccount")
  private FinancialAccount glAccount = null;

  @JsonProperty("ofiAccount")
  private FinancialAccount ofiAccount = null;

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

  /**
   * Gets or Sets status
   */
  public enum StatusEnum {
    APPROVED("approved"),
    
    UNAPPROVED("unapproved");

    private String value;

    StatusEnum(String value) {
      this.value = value;
    }

    @Override
    @JsonValue
    public String toString() {
      return String.valueOf(value);
    }

    @JsonCreator
    public static StatusEnum fromValue(String text) {
      for (StatusEnum b : StatusEnum.values()) {
        if (String.valueOf(b.value).equals(text)) {
          return b;
        }
      }
      return null;
    }
  }

  @JsonProperty("status")
  private StatusEnum status = null;

  public AccountMap glAccount(FinancialAccount glAccount) {
    this.glAccount = glAccount;
    return this;
  }

  /**
   * Get glAccount
   * @return glAccount
  **/
  @ApiModelProperty(value = "")

  @Valid

  public FinancialAccount getGlAccount() {
    return glAccount;
  }

  public void setGlAccount(FinancialAccount glAccount) {
    this.glAccount = glAccount;
  }

  public AccountMap ofiAccount(FinancialAccount ofiAccount) {
    this.ofiAccount = ofiAccount;
    return this;
  }

  /**
   * Get ofiAccount
   * @return ofiAccount
  **/
  @ApiModelProperty(value = "")

  @Valid

  public FinancialAccount getOfiAccount() {
    return ofiAccount;
  }

  public void setOfiAccount(FinancialAccount ofiAccount) {
    this.ofiAccount = ofiAccount;
  }

  public AccountMap validFrom(LocalDate validFrom) {
    this.validFrom = validFrom;
    return this;
  }

  /**
   * Start date of the mapping validity.
   * @return validFrom
  **/
  @ApiModelProperty(value = "Start date of the mapping validity.")

  @Valid

  public LocalDate getValidFrom() {
    return validFrom;
  }

  public void setValidFrom(LocalDate validFrom) {
    this.validFrom = validFrom;
  }

  public AccountMap vatCodeInd(Boolean vatCodeInd) {
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

  public AccountMap sapSegmentText(String sapSegmentText) {
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

  public AccountMap ofiWbsCode(String ofiWbsCode) {
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

  public AccountMap citMarkerVatFlag(CitMarkerVatFlagEnum citMarkerVatFlag) {
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

  public AccountMap status(StatusEnum status) {
    this.status = status;
    return this;
  }

  /**
   * Get status
   * @return status
  **/
  @ApiModelProperty(value = "")


  public StatusEnum getStatus() {
    return status;
  }

  public void setStatus(StatusEnum status) {
    this.status = status;
  }


  @Override
  public boolean equals(java.lang.Object o) {
    if (this == o) {
      return true;
    }
    if (o == null || getClass() != o.getClass()) {
      return false;
    }
    AccountMap accountMap = (AccountMap) o;
    return Objects.equals(this.glAccount, accountMap.glAccount) &&
        Objects.equals(this.ofiAccount, accountMap.ofiAccount) &&
        Objects.equals(this.validFrom, accountMap.validFrom) &&
        Objects.equals(this.vatCodeInd, accountMap.vatCodeInd) &&
        Objects.equals(this.sapSegmentText, accountMap.sapSegmentText) &&
        Objects.equals(this.ofiWbsCode, accountMap.ofiWbsCode) &&
        Objects.equals(this.citMarkerVatFlag, accountMap.citMarkerVatFlag) &&
        Objects.equals(this.status, accountMap.status);
  }

  @Override
  public int hashCode() {
    return Objects.hash(glAccount, ofiAccount, validFrom, vatCodeInd, sapSegmentText, ofiWbsCode, citMarkerVatFlag, status);
  }

  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class AccountMap {\n");
    
    sb.append("    glAccount: ").append(toIndentedString(glAccount)).append("\n");
    sb.append("    ofiAccount: ").append(toIndentedString(ofiAccount)).append("\n");
    sb.append("    validFrom: ").append(toIndentedString(validFrom)).append("\n");
    sb.append("    vatCodeInd: ").append(toIndentedString(vatCodeInd)).append("\n");
    sb.append("    sapSegmentText: ").append(toIndentedString(sapSegmentText)).append("\n");
    sb.append("    ofiWbsCode: ").append(toIndentedString(ofiWbsCode)).append("\n");
    sb.append("    citMarkerVatFlag: ").append(toIndentedString(citMarkerVatFlag)).append("\n");
    sb.append("    status: ").append(toIndentedString(status)).append("\n");
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

