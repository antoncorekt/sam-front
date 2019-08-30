package io.swagger.model;

import java.util.Objects;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonCreator;
import com.fasterxml.jackson.annotation.JsonValue;
import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import org.threeten.bp.OffsetDateTime;
import org.springframework.validation.annotation.Validated;
import javax.validation.Valid;
import javax.validation.constraints.*;

/**
 * MarketSegment
 */
@Validated
@javax.annotation.Generated(value = "io.swagger.codegen.languages.SpringCodegen", date = "2019-08-30T09:02:23.196Z")

public class MarketSegment   {
  @JsonProperty("id")
  private String id = null;

  /**
   * Gets or Sets category
   */
  public enum CategoryEnum {
    BIZ("BIZ"),
    
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

  @JsonProperty("entryDate")
  private OffsetDateTime entryDate = null;

  public MarketSegment id(String id) {
    this.id = id;
    return this;
  }

  /**
   * Get id
   * @return id
  **/
  @ApiModelProperty(value = "")

@Size(max=30) 
  public String getId() {
    return id;
  }

  public void setId(String id) {
    this.id = id;
  }

  public MarketSegment category(CategoryEnum category) {
    this.category = category;
    return this;
  }

  /**
   * Get category
   * @return category
  **/
  @ApiModelProperty(value = "")


  public CategoryEnum getCategory() {
    return category;
  }

  public void setCategory(CategoryEnum category) {
    this.category = category;
  }

  public MarketSegment entryDate(OffsetDateTime entryDate) {
    this.entryDate = entryDate;
    return this;
  }

  /**
   * Get entryDate
   * @return entryDate
  **/
  @ApiModelProperty(value = "")

  @Valid

  public OffsetDateTime getEntryDate() {
    return entryDate;
  }

  public void setEntryDate(OffsetDateTime entryDate) {
    this.entryDate = entryDate;
  }


  @Override
  public boolean equals(java.lang.Object o) {
    if (this == o) {
      return true;
    }
    if (o == null || getClass() != o.getClass()) {
      return false;
    }
    MarketSegment marketSegment = (MarketSegment) o;
    return Objects.equals(this.id, marketSegment.id) &&
        Objects.equals(this.category, marketSegment.category) &&
        Objects.equals(this.entryDate, marketSegment.entryDate);
  }

  @Override
  public int hashCode() {
    return Objects.hash(id, category, entryDate);
  }

  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class MarketSegment {\n");
    
    sb.append("    id: ").append(toIndentedString(id)).append("\n");
    sb.append("    category: ").append(toIndentedString(category)).append("\n");
    sb.append("    entryDate: ").append(toIndentedString(entryDate)).append("\n");
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

