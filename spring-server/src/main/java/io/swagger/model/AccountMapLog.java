package io.swagger.model;

import java.util.Objects;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonCreator;
import com.fasterxml.jackson.annotation.JsonValue;
import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import io.swagger.model.AccountMap;
import org.threeten.bp.OffsetDateTime;
import org.springframework.validation.annotation.Validated;
import javax.validation.Valid;
import javax.validation.constraints.*;

/**
 * AccountMapLog
 */
@Validated
@javax.annotation.Generated(value = "io.swagger.codegen.languages.SpringCodegen", date = "2019-08-30T09:02:23.196Z")

public class AccountMapLog   {
  @JsonProperty("old")
  private AccountMap old = null;

  @JsonProperty("new")
  private AccountMap _new = null;

  @JsonProperty("user")
  private String user = null;

  /**
   * Gets or Sets action
   */
  public enum ActionEnum {
    INSERT("insert"),
    
    UPDATE("update"),
    
    DELETE("delete");

    private String value;

    ActionEnum(String value) {
      this.value = value;
    }

    @Override
    @JsonValue
    public String toString() {
      return String.valueOf(value);
    }

    @JsonCreator
    public static ActionEnum fromValue(String text) {
      for (ActionEnum b : ActionEnum.values()) {
        if (String.valueOf(b.value).equals(text)) {
          return b;
        }
      }
      return null;
    }
  }

  @JsonProperty("action")
  private ActionEnum action = null;

  @JsonProperty("actionDate")
  private OffsetDateTime actionDate = null;

  public AccountMapLog old(AccountMap old) {
    this.old = old;
    return this;
  }

  /**
   * Get old
   * @return old
  **/
  @ApiModelProperty(value = "")

  @Valid

  public AccountMap getOld() {
    return old;
  }

  public void setOld(AccountMap old) {
    this.old = old;
  }

  public AccountMapLog _new(AccountMap _new) {
    this._new = _new;
    return this;
  }

  /**
   * Get _new
   * @return _new
  **/
  @ApiModelProperty(value = "")

  @Valid

  public AccountMap getNew() {
    return _new;
  }

  public void setNew(AccountMap _new) {
    this._new = _new;
  }

  public AccountMapLog user(String user) {
    this.user = user;
    return this;
  }

  /**
   * Get user
   * @return user
  **/
  @ApiModelProperty(value = "")


  public String getUser() {
    return user;
  }

  public void setUser(String user) {
    this.user = user;
  }

  public AccountMapLog action(ActionEnum action) {
    this.action = action;
    return this;
  }

  /**
   * Get action
   * @return action
  **/
  @ApiModelProperty(value = "")


  public ActionEnum getAction() {
    return action;
  }

  public void setAction(ActionEnum action) {
    this.action = action;
  }

  public AccountMapLog actionDate(OffsetDateTime actionDate) {
    this.actionDate = actionDate;
    return this;
  }

  /**
   * Get actionDate
   * @return actionDate
  **/
  @ApiModelProperty(value = "")

  @Valid

  public OffsetDateTime getActionDate() {
    return actionDate;
  }

  public void setActionDate(OffsetDateTime actionDate) {
    this.actionDate = actionDate;
  }


  @Override
  public boolean equals(java.lang.Object o) {
    if (this == o) {
      return true;
    }
    if (o == null || getClass() != o.getClass()) {
      return false;
    }
    AccountMapLog accountMapLog = (AccountMapLog) o;
    return Objects.equals(this.old, accountMapLog.old) &&
        Objects.equals(this._new, accountMapLog._new) &&
        Objects.equals(this.user, accountMapLog.user) &&
        Objects.equals(this.action, accountMapLog.action) &&
        Objects.equals(this.actionDate, accountMapLog.actionDate);
  }

  @Override
  public int hashCode() {
    return Objects.hash(old, _new, user, action, actionDate);
  }

  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class AccountMapLog {\n");
    
    sb.append("    old: ").append(toIndentedString(old)).append("\n");
    sb.append("    _new: ").append(toIndentedString(_new)).append("\n");
    sb.append("    user: ").append(toIndentedString(user)).append("\n");
    sb.append("    action: ").append(toIndentedString(action)).append("\n");
    sb.append("    actionDate: ").append(toIndentedString(actionDate)).append("\n");
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

