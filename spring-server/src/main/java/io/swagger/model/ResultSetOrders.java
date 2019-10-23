package io.swagger.model;

import java.util.Objects;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonCreator;
import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import io.swagger.model.Order;
import io.swagger.model.Status;
import java.util.ArrayList;
import java.util.List;
import org.springframework.validation.annotation.Validated;
import javax.validation.Valid;
import javax.validation.constraints.*;

/**
 * ResultSetOrders
 */
@Validated
@javax.annotation.Generated(value = "io.swagger.codegen.languages.SpringCodegen", date = "2019-09-06T13:08:35.508Z")

public class ResultSetOrders   {
  @JsonProperty("status")
  private Status status = null;

  @JsonProperty("count")
  private Integer count = null;

  @JsonProperty("data")
  @Valid
  private List<Order> data = null;

  public ResultSetOrders status(Status status) {
    this.status = status;
    return this;
  }

  /**
   * Get status
   * @return status
  **/
  @ApiModelProperty(value = "")

  @Valid

  public Status getStatus() {
    return status;
  }

  public void setStatus(Status status) {
    this.status = status;
  }

  public ResultSetOrders count(Integer count) {
    this.count = count;
    return this;
  }

  /**
   * Get count
   * @return count
  **/
  @ApiModelProperty(value = "")


  public Integer getCount() {
    return count;
  }

  public void setCount(Integer count) {
    this.count = count;
  }

  public ResultSetOrders data(List<Order> data) {
    this.data = data;
    return this;
  }

  public ResultSetOrders addDataItem(Order dataItem) {
    if (this.data == null) {
      this.data = new ArrayList<Order>();
    }
    this.data.add(dataItem);
    return this;
  }

  /**
   * Get data
   * @return data
  **/
  @ApiModelProperty(value = "")

  @Valid

  public List<Order> getData() {
    return data;
  }

  public void setData(List<Order> data) {
    this.data = data;
  }


  @Override
  public boolean equals(java.lang.Object o) {
    if (this == o) {
      return true;
    }
    if (o == null || getClass() != o.getClass()) {
      return false;
    }
    ResultSetOrders resultSetOrders = (ResultSetOrders) o;
    return Objects.equals(this.status, resultSetOrders.status) &&
        Objects.equals(this.count, resultSetOrders.count) &&
        Objects.equals(this.data, resultSetOrders.data);
  }

  @Override
  public int hashCode() {
    return Objects.hash(status, count, data);
  }

  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class ResultSetOrders {\n");
    
    sb.append("    status: ").append(toIndentedString(status)).append("\n");
    sb.append("    count: ").append(toIndentedString(count)).append("\n");
    sb.append("    data: ").append(toIndentedString(data)).append("\n");
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

