package io.swagger.model;

import java.util.Objects;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonCreator;
import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import org.springframework.validation.annotation.Validated;
import javax.validation.Valid;
import javax.validation.constraints.*;

/**
 * AccountDictSap
 */
@Validated
@javax.annotation.Generated(value = "io.swagger.codegen.languages.SpringCodegen", date = "2019-09-06T13:08:35.508Z")

public class AccountDictSap   {
  @JsonProperty("sapOfiAccount")
  private String sapOfiAccount = null;

  @JsonProperty("name")
  private String name = null;

  @JsonProperty("status")
  private String status = null;

  public AccountDictSap sapOfiAccount(String sapOfiAccount) {
    this.sapOfiAccount = sapOfiAccount;
    return this;
  }

  /**
   * Get sapOfiAccount
   * @return sapOfiAccount
  **/
  @ApiModelProperty(value = "")


  public String getSapOfiAccount() {
    return sapOfiAccount;
  }

  public void setSapOfiAccount(String sapOfiAccount) {
    this.sapOfiAccount = sapOfiAccount;
  }

  public AccountDictSap name(String name) {
    this.name = name;
    return this;
  }

  /**
   * Get name
   * @return name
  **/
  @ApiModelProperty(value = "")


  public String getName() {
    return name;
  }

  public void setName(String name) {
    this.name = name;
  }

  public AccountDictSap status(String status) {
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


  @Override
  public boolean equals(java.lang.Object o) {
    if (this == o) {
      return true;
    }
    if (o == null || getClass() != o.getClass()) {
      return false;
    }
    AccountDictSap accountDictSap = (AccountDictSap) o;
    return Objects.equals(this.sapOfiAccount, accountDictSap.sapOfiAccount) &&
        Objects.equals(this.name, accountDictSap.name) &&
        Objects.equals(this.status, accountDictSap.status);
  }

  @Override
  public int hashCode() {
    return Objects.hash(sapOfiAccount, name, status);
  }

  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class AccountDictSap {\n");
    
    sb.append("    sapOfiAccount: ").append(toIndentedString(sapOfiAccount)).append("\n");
    sb.append("    name: ").append(toIndentedString(name)).append("\n");
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

