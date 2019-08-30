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
 * SegmentMapEntry
 */
@Validated
@javax.annotation.Generated(value = "io.swagger.codegen.languages.SpringCodegen", date = "2019-08-30T09:02:23.196Z")

public class SegmentMapEntry   {
  @JsonProperty("segmentId")
  private String segmentId = null;

  @JsonProperty("orderNumber")
  private Long orderNumber = null;

  public SegmentMapEntry segmentId(String segmentId) {
    this.segmentId = segmentId;
    return this;
  }

  /**
   * Get segmentId
   * @return segmentId
  **/
  @ApiModelProperty(value = "")

@Size(max=30) 
  public String getSegmentId() {
    return segmentId;
  }

  public void setSegmentId(String segmentId) {
    this.segmentId = segmentId;
  }

  public SegmentMapEntry orderNumber(Long orderNumber) {
    this.orderNumber = orderNumber;
    return this;
  }

  /**
   * Get orderNumber
   * @return orderNumber
  **/
  @ApiModelProperty(value = "")


  public Long getOrderNumber() {
    return orderNumber;
  }

  public void setOrderNumber(Long orderNumber) {
    this.orderNumber = orderNumber;
  }


  @Override
  public boolean equals(java.lang.Object o) {
    if (this == o) {
      return true;
    }
    if (o == null || getClass() != o.getClass()) {
      return false;
    }
    SegmentMapEntry segmentMapEntry = (SegmentMapEntry) o;
    return Objects.equals(this.segmentId, segmentMapEntry.segmentId) &&
        Objects.equals(this.orderNumber, segmentMapEntry.orderNumber);
  }

  @Override
  public int hashCode() {
    return Objects.hash(segmentId, orderNumber);
  }

  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class SegmentMapEntry {\n");
    
    sb.append("    segmentId: ").append(toIndentedString(segmentId)).append("\n");
    sb.append("    orderNumber: ").append(toIndentedString(orderNumber)).append("\n");
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

