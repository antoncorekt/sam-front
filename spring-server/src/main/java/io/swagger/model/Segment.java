package io.swagger.model;

import java.util.Objects;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonCreator;
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
 * Segment
 */
@Validated
@javax.annotation.Generated(value = "io.swagger.codegen.languages.SpringCodegen", date = "2019-09-06T13:08:35.508Z")
@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class Segment   {
  @JsonProperty("csTradeRef")
  private String csTradeRef = null;

  @JsonProperty("csType")
  private Integer csType = null;

  public Segment csTradeRef(String csTradeRef) {
    this.csTradeRef = csTradeRef;
    return this;
  }

  /**
   * Get csTradeRef
   * @return csTradeRef
  **/
  @ApiModelProperty(value = "")


  public String getCsTradeRef() {
    return csTradeRef;
  }

  public void setCsTradeRef(String csTradeRef) {
    this.csTradeRef = csTradeRef;
  }

  public Segment csType(Integer csType) {
    this.csType = csType;
    return this;
  }

  /**
   * Get csType
   * @return csType
  **/
  @ApiModelProperty(value = "")


  public Integer getCsType() {
    return csType;
  }

  public void setCsType(Integer csType) {
    this.csType = csType;
  }


  @Override
  public boolean equals(java.lang.Object o) {
    if (this == o) {
      return true;
    }
    if (o == null || getClass() != o.getClass()) {
      return false;
    }
    Segment segment = (Segment) o;
    return Objects.equals(this.csTradeRef, segment.csTradeRef) &&
        Objects.equals(this.csType, segment.csType);
  }

  @Override
  public int hashCode() {
    return Objects.hash(csTradeRef, csType);
  }

  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class Segment {\n");
    
    sb.append("    csTradeRef: ").append(toIndentedString(csTradeRef)).append("\n");
    sb.append("    csType: ").append(toIndentedString(csType)).append("\n");
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

