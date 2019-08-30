package io.swagger.model;

import java.util.Objects;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonCreator;
import com.fasterxml.jackson.annotation.JsonValue;
import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.validation.annotation.Validated;
import javax.validation.Valid;
import javax.validation.constraints.*;

/**
 * FinancialAccount
 */
@Validated
@javax.annotation.Generated(value = "io.swagger.codegen.languages.SpringCodegen", date = "2019-08-30T09:02:23.196Z")
@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class FinancialAccount   {
  @JsonProperty("id")
  private String id = null;

  @JsonProperty("name")
  private String name = null;

  /**
   * Account status
   */
  public enum StatusEnum {
    ACTIVE("active"),
    
    INACTIVE("inactive");

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
  private StatusEnum status = StatusEnum.ACTIVE;

  @JsonProperty("type")
  private String type = null;

  public FinancialAccount id(String id) {
    this.id = id;
    return this;
  }

  /**
   * Account number
   * @return id
  **/
  @ApiModelProperty(value = "Account number")

@Size(max=30) 
  public String getId() {
    return id;
  }

  public void setId(String id) {
    this.id = id;
  }

  public FinancialAccount name(String name) {
    this.name = name;
    return this;
  }

  /**
   * Account description
   * @return name
  **/
  @ApiModelProperty(value = "Account description")

@Size(max=120) 
  public String getName() {
    return name;
  }

  public void setName(String name) {
    this.name = name;
  }

  public FinancialAccount status(StatusEnum status) {
    this.status = status;
    return this;
  }

  /**
   * Account status
   * @return status
  **/
  @ApiModelProperty(value = "Account status")


  public StatusEnum getStatus() {
    return status;
  }

  public void setStatus(StatusEnum status) {
    this.status = status;
  }

  public FinancialAccount type(String type) {
    this.type = type;
    return this;
  }

  /**
   * Account type
   * @return type
  **/
  @ApiModelProperty(value = "Account type")


  public String getType() {
    return type;
  }

  public void setType(String type) {
    this.type = type;
  }


  @Override
  public boolean equals(java.lang.Object o) {
    if (this == o) {
      return true;
    }
    if (o == null || getClass() != o.getClass()) {
      return false;
    }
    FinancialAccount financialAccount = (FinancialAccount) o;
    return Objects.equals(this.id, financialAccount.id) &&
        Objects.equals(this.name, financialAccount.name) &&
        Objects.equals(this.status, financialAccount.status) &&
        Objects.equals(this.type, financialAccount.type);
  }

  @Override
  public int hashCode() {
    return Objects.hash(id, name, status, type);
  }

  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class FinancialAccount {\n");
    
    sb.append("    id: ").append(toIndentedString(id)).append("\n");
    sb.append("    name: ").append(toIndentedString(name)).append("\n");
    sb.append("    status: ").append(toIndentedString(status)).append("\n");
    sb.append("    type: ").append(toIndentedString(type)).append("\n");
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

