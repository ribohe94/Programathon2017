package io.swagger.api;

import io.swagger.model.Person;

import io.swagger.annotations.*;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RequestPart;
import org.springframework.web.multipart.MultipartFile;

import java.util.List;
import javax.validation.constraints.*;
@javax.annotation.Generated(value = "io.swagger.codegen.languages.SpringCodegen", date = "2017-09-19T22:22:34.882-06:00")

@Api(value = "person", description = "the person API")
public interface PersonApi {

    @ApiOperation(value = "Agregar nueva persona", notes = "", response = Void.class, authorizations = {
        @Authorization(value = "person_auth", scopes = {
            @AuthorizationScope(scope = "write:pets", description = "modify person in your account"),
            @AuthorizationScope(scope = "read:pets", description = "read your person")
            })
    }, tags={ "person", })
    @ApiResponses(value = { 
        @ApiResponse(code = 405, message = "Invalid input", response = Void.class) })
    @RequestMapping(value = "/person",
        produces = { "application/xml", "application/json" }, 
        consumes = { "application/json", "application/xml" },
        method = RequestMethod.POST)
    ResponseEntity<Void> addPerson(@ApiParam(value = "Objeto persona que va a ser agregado" ,required=true ) @RequestBody Person body);


    @ApiOperation(value = "Elimina persona", notes = "", response = Void.class, authorizations = {
        @Authorization(value = "person_auth", scopes = {
            @AuthorizationScope(scope = "write:pets", description = "modify person in your account"),
            @AuthorizationScope(scope = "read:pets", description = "read your person")
            })
    }, tags={ "person", })
    @ApiResponses(value = { 
        @ApiResponse(code = 400, message = "Invalid ID supplied", response = Void.class),
        @ApiResponse(code = 404, message = "Person not found", response = Void.class) })
    @RequestMapping(value = "/person/{personId}",
        produces = { "application/xml", "application/json" }, 
        method = RequestMethod.DELETE)
    ResponseEntity<Void> deletePerson(@ApiParam(value = "ID de la persona a eliminar",required=true ) @PathVariable("personId") Long personId,
        @ApiParam(value = ""  ) @RequestHeader(value="api_key", required=false) String apiKey);


    @ApiOperation(value = "Encontrar persona por ID", notes = "Regresa una unica persona", response = Person.class, authorizations = {
        @Authorization(value = "api_key")
    }, tags={ "person", })
    @ApiResponses(value = { 
        @ApiResponse(code = 200, message = "successful operation", response = Person.class),
        @ApiResponse(code = 400, message = "ID Invalida", response = Person.class),
        @ApiResponse(code = 404, message = "Persona no encontrada", response = Person.class) })
    @RequestMapping(value = "/person/{personId}",
        produces = { "application/xml", "application/json" }, 
        method = RequestMethod.GET)
    ResponseEntity<Person> getPersonById(@ApiParam(value = "ID de la persona a retornar",required=true ) @PathVariable("personId") Long personId);


    @ApiOperation(value = "Actualizar persona", notes = "", response = Void.class, authorizations = {
        @Authorization(value = "person_auth", scopes = {
            @AuthorizationScope(scope = "write:pets", description = "modify person in your account"),
            @AuthorizationScope(scope = "read:pets", description = "read your person")
            })
    }, tags={ "person", })
    @ApiResponses(value = { 
        @ApiResponse(code = 400, message = "ID invalido", response = Void.class),
        @ApiResponse(code = 404, message = "Persona no encontrada", response = Void.class),
        @ApiResponse(code = 405, message = "Excepcion de validacion", response = Void.class) })
    @RequestMapping(value = "/person",
        produces = { "application/xml", "application/json" }, 
        consumes = { "application/json", "application/xml" },
        method = RequestMethod.PUT)
    ResponseEntity<Void> updatePerson(@ApiParam(value = "Objeto persona que necesita ser actualizado" ,required=true ) @RequestBody Person body);


    @ApiOperation(value = "Actualiza una persona", notes = "", response = Void.class, authorizations = {
        @Authorization(value = "person_auth", scopes = {
            @AuthorizationScope(scope = "write:pets", description = "modify person in your account"),
            @AuthorizationScope(scope = "read:pets", description = "read your person")
            })
    }, tags={ "person", })
    @ApiResponses(value = { 
        @ApiResponse(code = 405, message = "Invalid input", response = Void.class) })
    @RequestMapping(value = "/person/{personId}",
        produces = { "application/xml", "application/json" }, 
        consumes = { "application/x-www-form-urlencoded" },
        method = RequestMethod.POST)
    ResponseEntity<Void> updatePersonById(@ApiParam(value = "ID de persona que tiene que ser actualizada",required=true ) @PathVariable("personId") Long personId,
        @ApiParam(value = "Nombre actualizado de persona" ) @RequestPart(value="name", required=false)  String name,
        @ApiParam(value = "Primer apellido actualizado de persona" ) @RequestPart(value="lname", required=false)  String lname,
        @ApiParam(value = "Segundo apellido actualizado de persona" ) @RequestPart(value="_2lname", required=false)  String _2lname);

}
