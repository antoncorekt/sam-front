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
 * AccountDictBscs
 */
@Validated
@javax.annotation.Generated(value = "io.swagger.codegen.languages.SpringCodegen", date = "2019-09-06T13:08:35.508Z")

public class AccountDictBscs   {
  @JsonProperty("glCode")
  private String glCode = null;

  @JsonProperty("glDes")
  private String glDes = null;

  @JsonProperty("glType")
  private String glType = null;

  @JsonProperty("glActive")
  private String glActive = null;

  public AccountDictBscs glCode(String glCode) {
    this.glCode = glCode;
    return this;
  }

  /**
   * Get glCode
   * @return glCode
  **/
  @ApiModelProperty(value = "")


  public String getGlCode() {
    return glCode;
  }

  public void setGlCode(String glCode) {
    this.glCode = glCode;
  }

  public AccountDictBscs glDes(String glDes) {
    this.glDes = glDes;
    return this;
  }

  /**
   * Get glDes
   * @return glDes
  **/
  @ApiModelProperty(value = "")


  public String getGlDes() {
    return glDes;
  }

  public void setGlDes(String glDes) {
    this.glDes = glDes;
  }

  public AccountDictBscs glType(String glType) {
    this.glType = glType;
    return this;
  }

  /**
   * Get glType
   * @return glType
  **/
  @ApiModelProperty(value = "")


  public String getGlType() {
    return glType;
  }

  public void setGlType(String glType) {
    this.glType = glType;
  }

  public AccountDictBscs glActive(String glActive) {
    this.glActive = glActive;
    return this;
  }

  /**
   * Get glActive
   * @return glActive
  **/
  @ApiModelProperty(value = "")


  public String getGlActive() {
    return glActive;
  }

  public void setGlActive(String glActive) {
    this.glActive = glActive;
  }


  @Override
  public boolean equals(java.lang.Object o) {
    if (this == o) {
      return true;
    }
    if (o == null || getClass() != o.getClass()) {
      return false;
    }
    AccountDictBscs accountDictBscs = (AccountDictBscs) o;
    return Objects.equals(this.glCode, accountDictBscs.glCode) &&
        Objects.equals(this.glDes, accountDictBscs.glDes) &&
        Objects.equals(this.glType, accountDictBscs.glType) &&
        Objects.equals(this.glActive, accountDictBscs.glActive);
  }

  @Override
  public int hashCode() {
    return Objects.hash(glCode, glDes, glType, glActive);
  }

  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class AccountDictBscs {\n");
    
    sb.append("    glCode: ").append(toIndentedString(glCode)).append("\n");
    sb.append("    glDes: ").append(toIndentedString(glDes)).append("\n");
    sb.append("    glType: ").append(toIndentedString(glType)).append("\n");
    sb.append("    glActive: ").append(toIndentedString(glActive)).append("\n");
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

