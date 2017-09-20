package io.swagger.model;

import java.util.Objects;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonCreator;
import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import io.swagger.model.Category;
import javax.validation.constraints.*;
/**
 * Candidate
 */
@javax.annotation.Generated(value = "io.swagger.codegen.languages.SpringCodegen", date = "2017-09-19T22:22:34.882-06:00")

public class Candidate   {
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

  @JsonProperty("party")
  private String party = null;

  @JsonProperty("description")
  private String description = null;

  public Candidate id(Long id) {
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

  public Candidate category(Category category) {
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

  public Candidate name(String name) {
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

  public Candidate lname(String lname) {
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

  public Candidate _2lname(String _2lname) {
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

  public Candidate party(String party) {
    this.party = party;
    return this;
  }

   /**
   * Get party
   * @return party
  **/
  @ApiModelProperty(example = "PAC", required = true, value = "")
  @NotNull
  public String getParty() {
    return party;
  }

  public void setParty(String party) {
    this.party = party;
  }

  public Candidate description(String description) {
    this.description = description;
    return this;
  }

   /**
   * Get description
   * @return description
  **/
  @ApiModelProperty(example = "PAC", value = "")
  public String getDescription() {
    return description;
  }

  public void setDescription(String description) {
    this.description = description;
  }


  @Override
  public boolean equals(java.lang.Object o) {
    if (this == o) {
      return true;
    }
    if (o == null || getClass() != o.getClass()) {
      return false;
    }
    Candidate candidate = (Candidate) o;
    return Objects.equals(this.id, candidate.id) &&
        Objects.equals(this.category, candidate.category) &&
        Objects.equals(this.name, candidate.name) &&
        Objects.equals(this.lname, candidate.lname) &&
        Objects.equals(this._2lname, candidate._2lname) &&
        Objects.equals(this.party, candidate.party) &&
        Objects.equals(this.description, candidate.description);
  }

  @Override
  public int hashCode() {
    return Objects.hash(id, category, name, lname, _2lname, party, description);
  }

  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class Candidate {\n");
    
    sb.append("    id: ").append(toIndentedString(id)).append("\n");
    sb.append("    category: ").append(toIndentedString(category)).append("\n");
    sb.append("    name: ").append(toIndentedString(name)).append("\n");
    sb.append("    lname: ").append(toIndentedString(lname)).append("\n");
    sb.append("    _2lname: ").append(toIndentedString(_2lname)).append("\n");
    sb.append("    party: ").append(toIndentedString(party)).append("\n");
    sb.append("    description: ").append(toIndentedString(description)).append("\n");
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

