package io.swagger.model;

import java.util.Objects;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonCreator;
import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import io.swagger.model.FinancialAccount;
import io.swagger.model.SegmentMapEntry;
import java.util.ArrayList;
import java.util.List;
import org.threeten.bp.LocalDate;
import org.springframework.validation.annotation.Validated;
import javax.validation.Valid;
import javax.validation.constraints.*;

/**
 * SegmentMap
 */
@Validated
@javax.annotation.Generated(value = "io.swagger.codegen.languages.SpringCodegen", date = "2019-08-30T09:02:23.196Z")

public class SegmentMap   {
  @JsonProperty("glAccount")
  private FinancialAccount glAccount = null;

  @JsonProperty("validFrom")
  private LocalDate validFrom = null;

  @JsonProperty("segments")
  @Valid
  private List<SegmentMapEntry> segments = null;

  public SegmentMap glAccount(FinancialAccount glAccount) {
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

  public SegmentMap validFrom(LocalDate validFrom) {
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

  public SegmentMap segments(List<SegmentMapEntry> segments) {
    this.segments = segments;
    return this;
  }

  public SegmentMap addSegmentsItem(SegmentMapEntry segmentsItem) {
    if (this.segments == null) {
      this.segments = new ArrayList<SegmentMapEntry>();
    }
    this.segments.add(segmentsItem);
    return this;
  }

  /**
   * Get segments
   * @return segments
  **/
  @ApiModelProperty(value = "")

  @Valid

  public List<SegmentMapEntry> getSegments() {
    return segments;
  }

  public void setSegments(List<SegmentMapEntry> segments) {
    this.segments = segments;
  }


  @Override
  public boolean equals(java.lang.Object o) {
    if (this == o) {
      return true;
    }
    if (o == null || getClass() != o.getClass()) {
      return false;
    }
    SegmentMap segmentMap = (SegmentMap) o;
    return Objects.equals(this.glAccount, segmentMap.glAccount) &&
        Objects.equals(this.validFrom, segmentMap.validFrom) &&
        Objects.equals(this.segments, segmentMap.segments);
  }

  @Override
  public int hashCode() {
    return Objects.hash(glAccount, validFrom, segments);
  }

  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class SegmentMap {\n");
    
    sb.append("    glAccount: ").append(toIndentedString(glAccount)).append("\n");
    sb.append("    validFrom: ").append(toIndentedString(validFrom)).append("\n");
    sb.append("    segments: ").append(toIndentedString(segments)).append("\n");
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

