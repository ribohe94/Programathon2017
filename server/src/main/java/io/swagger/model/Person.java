package io.swagger.model;

import java.util.Objects;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonCreator;
import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import io.swagger.model.Category;
import javax.validation.constraints.*;
/**
 * Person
 */
@javax.annotation.Generated(value = "io.swagger.codegen.languages.SpringCodegen", date = "2017-09-19T22:22:34.882-06:00")

public class Person   {
  @JsonProperty("id")
  private Long id = null;

  @JsonProperty("category")
  private Category category = null;

  @JsonProperty("name")
  private String name = null;

  @JsonProperty("lname")
  private String lname = null;

  @JsonProperty("2lname")
  private String _2lname = null;

  @JsonProperty("candidate")
  private Long candidate = null;

  public Person id(Long id) {
    this.id = id;
    return this;
  }

   /**
   * Get id
   * @return id
  **/
  @ApiModelProperty(required = true, value = "")
  @NotNull
  public Long getId() {
    return id;
  }

  public void setId(Long id) {
    this.id = id;
  }

  public Person category(Category category) {
    this.category = category;
    return this;
  }

   /**
   * Get category
   * @return category
  **/
  @ApiModelProperty(value = "")
  public Category getCategory() {
    return category;
  }

  public void setCategory(Category category) {
    this.category = category;
  }

  public Person name(String name) {
    this.name = name;
    return this;
  }

   /**
   * Get name
   * @return name
  **/
  @ApiModelProperty(example = "Riccardo", required = true, value = "")
  @NotNull
  public String getName() {
    return name;
  }

  public void setName(String name) {
    this.name = name;
  }

  public Person lname(String lname) {
    this.lname = lname;
    return this;
  }

   /**
   * Get lname
   * @return lname
  **/
  @ApiModelProperty(example = "Bove", value = "")
  public String getLname() {
    return lname;
  }

  public void setLname(String lname) {
    this.lname = lname;
  }

  public Person _2lname(String _2lname) {
    this._2lname = _2lname;
    return this;
  }

   /**
   * Get _2lname
   * @return _2lname
  **/
  @ApiModelProperty(example = "Herrera", value = "")
  public String get2lname() {
    return _2lname;
  }

  public void set2lname(String _2lname) {
    this._2lname = _2lname;
  }

  public Person candidate(Long candidate) {
    this.candidate = candidate;
    return this;
  }

   /**
   * Get candidate
   * @return candidate
  **/
  @ApiModelProperty(value = "")
  public Long getCandidate() {
    return candidate;
  }

  public void setCandidate(Long candidate) {
    this.candidate = candidate;
  }


  @Override
  public boolean equals(java.lang.Object o) {
    if (this == o) {
      return true;
    }
    if (o == null || getClass() != o.getClass()) {
      return false;
    }
    Person person = (Person) o;
    return Objects.equals(this.id, person.id) &&
        Objects.equals(this.category, person.category) &&
        Objects.equals(this.name, person.name) &&
        Objects.equals(this.lname, person.lname) &&
        Objects.equals(this._2lname, person._2lname) &&
        Objects.equals(this.candidate, person.candidate);
  }

  @Override
  public int hashCode() {
    return Objects.hash(id, category, name, lname, _2lname, candidate);
  }

  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class Person {\n");
    
    sb.append("    id: ").append(toIndentedString(id)).append("\n");
    sb.append("    category: ").append(toIndentedString(category)).append("\n");
    sb.append("    name: ").append(toIndentedString(name)).append("\n");
    sb.append("    lname: ").append(toIndentedString(lname)).append("\n");
    sb.append("    _2lname: ").append(toIndentedString(_2lname)).append("\n");
    sb.append("    candidate: ").append(toIndentedString(candidate)).append("\n");
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

