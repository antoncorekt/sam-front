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
 * InlineResponse201
 */
@Validated
@javax.annotation.Generated(value = "io.swagger.codegen.languages.SpringCodegen", date = "2019-08-30T09:02:23.196Z")

public class InlineResponse201   {
  @JsonProperty("imported")
  private Integer imported = null;

  @JsonProperty("new")
  private Integer _new = null;

  @JsonProperty("updated")
  private Integer updated = null;

  public InlineResponse201 imported(Integer imported) {
    this.imported = imported;
    return this;
  }

  /**
   * Number of OFI accounts in the input file
   * @return imported
  **/
  @ApiModelProperty(value = "Number of OFI accounts in the input file")


  public Integer getImported() {
    return imported;
  }

  public void setImported(Integer imported) {
    this.imported = imported;
  }

  public InlineResponse201 _new(Integer _new) {
    this._new = _new;
    return this;
  }

  /**
   * Number of new OFI accounts imported
   * @return _new
  **/
  @ApiModelProperty(value = "Number of new OFI accounts imported")


  public Integer getNew() {
    return _new;
  }

  public void setNew(Integer _new) {
    this._new = _new;
  }

  public InlineResponse201 updated(Integer updated) {
    this.updated = updated;
    return this;
  }

  /**
   * Number of updated OFI accounts
   * @return updated
  **/
  @ApiModelProperty(value = "Number of updated OFI accounts")


  public Integer getUpdated() {
    return updated;
  }

  public void setUpdated(Integer updated) {
    this.updated = updated;
  }


  @Override
  public boolean equals(java.lang.Object o) {
    if (this == o) {
      return true;
    }
    if (o == null || getClass() != o.getClass()) {
      return false;
    }
    InlineResponse201 inlineResponse201 = (InlineResponse201) o;
    return Objects.equals(this.imported, inlineResponse201.imported) &&
        Objects.equals(this._new, inlineResponse201._new) &&
        Objects.equals(this.updated, inlineResponse201.updated);
  }

  @Override
  public int hashCode() {
    return Objects.hash(imported, _new, updated);
  }

  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class InlineResponse201 {\n");
    
    sb.append("    imported: ").append(toIndentedString(imported)).append("\n");
    sb.append("    _new: ").append(toIndentedString(_new)).append("\n");
    sb.append("    updated: ").append(toIndentedString(updated)).append("\n");
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

