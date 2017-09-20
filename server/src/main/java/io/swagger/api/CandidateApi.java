package io.swagger.api;

import io.swagger.model.Candidate;

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

@Api(value = "candidate", description = "the candidate API")
public interface CandidateApi {

    @ApiOperation(value = "Agregar nuevo candidato", notes = "", response = Void.class, authorizations = {
        @Authorization(value = "person_auth", scopes = {
            @AuthorizationScope(scope = "write:pets", description = "modify person in your account"),
            @AuthorizationScope(scope = "read:pets", description = "read your person")
            })
    }, tags={ "candidate", })
    @ApiResponses(value = { 
        @ApiResponse(code = 405, message = "Invalid input", response = Void.class) })
    @RequestMapping(value = "/candidate",
        produces = { "application/xml", "application/json" }, 
        consumes = { "application/json", "application/xml" },
        method = RequestMethod.POST)
    ResponseEntity<Void> addCandidate(@ApiParam(value = "Objeto persona que va a ser agregado" ,required=true ) @RequestBody Candidate body);


    @ApiOperation(value = "Elimina candidato", notes = "", response = Void.class, authorizations = {
        @Authorization(value = "person_auth", scopes = {
            @AuthorizationScope(scope = "write:pets", description = "modify person in your account"),
            @AuthorizationScope(scope = "read:pets", description = "read your person")
            })
    }, tags={ "candidate", })
    @ApiResponses(value = { 
        @ApiResponse(code = 400, message = "Invalid ID supplied", response = Void.class),
        @ApiResponse(code = 404, message = "Candidate not found", response = Void.class) })
    @RequestMapping(value = "/candidate/{candidateId}",
        produces = { "application/xml", "application/json" }, 
        method = RequestMethod.DELETE)
    ResponseEntity<Void> deleteCandidate(@ApiParam(value = "ID del candidato a eliminar",required=true ) @PathVariable("candidateId") Long candidateId,
        @ApiParam(value = ""  ) @RequestHeader(value="api_key", required=false) String apiKey);


    @ApiOperation(value = "Encontrar candidato por ID", notes = "Regresa un unico candidato", response = Candidate.class, authorizations = {
        @Authorization(value = "api_key")
    }, tags={ "candidate", })
    @ApiResponses(value = { 
        @ApiResponse(code = 200, message = "successful operation", response = Candidate.class),
        @ApiResponse(code = 400, message = "ID Invalida", response = Candidate.class),
        @ApiResponse(code = 404, message = "Candidato no encontrado", response = Candidate.class) })
    @RequestMapping(value = "/candidate/{candidateId}",
        produces = { "application/xml", "application/json" }, 
        method = RequestMethod.GET)
    ResponseEntity<Candidate> getCandidateById(@ApiParam(value = "ID del candidato a retornar",required=true ) @PathVariable("candidateId") Long candidateId);


    @ApiOperation(value = "Actualizar candidato", notes = "", response = Void.class, authorizations = {
        @Authorization(value = "person_auth", scopes = {
            @AuthorizationScope(scope = "write:pets", description = "modify person in your account"),
            @AuthorizationScope(scope = "read:pets", description = "read your person")
            })
    }, tags={ "candidate", })
    @ApiResponses(value = { 
        @ApiResponse(code = 400, message = "ID invalido", response = Void.class),
        @ApiResponse(code = 404, message = "Candidato no encontrada", response = Void.class),
        @ApiResponse(code = 405, message = "Excepcion de validacion", response = Void.class) })
    @RequestMapping(value = "/candidate",
        produces = { "application/xml", "application/json" }, 
        consumes = { "application/json", "application/xml" },
        method = RequestMethod.PUT)
    ResponseEntity<Void> updateCanbdidate(@ApiParam(value = "Objeto candidato que necesita ser actualizado" ,required=true ) @RequestBody Candidate body);


    @ApiOperation(value = "Actualiza un candidato", notes = "", response = Void.class, authorizations = {
        @Authorization(value = "person_auth", scopes = {
            @AuthorizationScope(scope = "write:pets", description = "modify person in your account"),
            @AuthorizationScope(scope = "read:pets", description = "read your person")
            })
    }, tags={ "candidate", })
    @ApiResponses(value = { 
        @ApiResponse(code = 405, message = "Invalid input", response = Void.class) })
    @RequestMapping(value = "/candidate/{candidateId}",
        produces = { "application/xml", "application/json" }, 
        consumes = { "application/x-www-form-urlencoded" },
        method = RequestMethod.POST)
    ResponseEntity<Void> updateCandidateById(@ApiParam(value = "ID de candidato que tiene que ser actualizado",required=true ) @PathVariable("candidateId") Long candidateId,
        @ApiParam(value = "Nombre actualizado del candidato" ) @RequestPart(value="name", required=false)  String name,
        @ApiParam(value = "Primer apellido actualizado del candidato" ) @RequestPart(value="lname", required=false)  String lname,
        @ApiParam(value = "Segundo apellido actualizado del candidato" ) @RequestPart(value="_2lname", required=false)  String _2lname);

}
