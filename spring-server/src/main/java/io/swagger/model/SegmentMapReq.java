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
 * SegmentMapReq
 */
@Validated
@javax.annotation.Generated(value = "io.swagger.codegen.languages.SpringCodegen", date = "2019-08-30T09:02:23.196Z")

public class SegmentMapReq   {
  @JsonProperty("validFrom")
  private LocalDate validFrom = null;

  public SegmentMapReq validFrom(LocalDate validFrom) {
    this.validFrom = validFrom;
    return this;
  }

  /**
   * Start date of the mapping validity. Must be first day of the month
   * @return validFrom
  **/
  @ApiModelProperty(value = "Start date of the mapping validity. Must be first day of the month")

  @Valid

  public LocalDate getValidFrom() {
    return validFrom;
  }

  public void setValidFrom(LocalDate validFrom) {
    this.validFrom = validFrom;
  }


  @Override
  public boolean equals(java.lang.Object o) {
    if (this == o) {
      return true;
    }
    if (o == null || getClass() != o.getClass()) {
      return false;
    }
    SegmentMapReq segmentMapReq = (SegmentMapReq) o;
    return Objects.equals(this.validFrom, segmentMapReq.validFrom);
  }

  @Override
  public int hashCode() {
    return Objects.hash(validFrom);
  }

  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class SegmentMapReq {\n");
    
    sb.append("    validFrom: ").append(toIndentedString(validFrom)).append("\n");
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

