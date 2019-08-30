package io.swagger.model;

import java.util.Objects;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonCreator;
import com.fasterxml.jackson.annotation.JsonValue;
import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import org.springframework.validation.annotation.Validated;
import javax.validation.Valid;
import javax.validation.constraints.*;

/**
 * MarketSegmentReq
 */
@Validated
@javax.annotation.Generated(value = "io.swagger.codegen.languages.SpringCodegen", date = "2019-08-30T09:02:23.196Z")

public class MarketSegmentReq   {
  @JsonProperty("id")
  private String id = null;

  /**
   * Gets or Sets category
   */
  public enum CategoryEnum {
    PRIV("PRIV");

    private String value;

    CategoryEnum(String value) {
      this.value = value;
    }

    @Override
    @JsonValue
    public String toString() {
      return String.valueOf(value);
    }

    @JsonCreator
    public static CategoryEnum fromValue(String text) {
      for (CategoryEnum b : CategoryEnum.values()) {
        if (String.valueOf(b.value).equals(text)) {
          return b;
        }
      }
      return null;
    }
  }

  @JsonProperty("category")
  private CategoryEnum category = null;

  public MarketSegmentReq id(String id) {
    this.id = id;
    return this;
  }

  /**
   * Get id
   * @return id
  **/
  @ApiModelProperty(required = true, value = "")
  @NotNull

@Size(max=30) 
  public String getId() {
    return id;
  }

  public void setId(String id) {
    this.id = id;
  }

  public MarketSegmentReq category(CategoryEnum category) {
    this.category = category;
    return this;
  }

  /**
   * Get category
   * @return category
  **/
  @ApiModelProperty(required = true, value = "")
  @NotNull


  public CategoryEnum getCategory() {
    return category;
  }

  public void setCategory(CategoryEnum category) {
    this.category = category;
  }


  @Override
  public boolean equals(java.lang.Object o) {
    if (this == o) {
      return true;
    }
    if (o == null || getClass() != o.getClass()) {
      return false;
    }
    MarketSegmentReq marketSegmentReq = (MarketSegmentReq) o;
    return Objects.equals(this.id, marketSegmentReq.id) &&
        Objects.equals(this.category, marketSegmentReq.category);
  }

  @Override
  public int hashCode() {
    return Objects.hash(id, category);
  }

  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class MarketSegmentReq {\n");
    
    sb.append("    id: ").append(toIndentedString(id)).append("\n");
    sb.append("    category: ").append(toIndentedString(category)).append("\n");
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

