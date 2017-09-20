package io.swagger.api;

import io.swagger.model.Person;

import io.swagger.annotations.*;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RequestPart;
import org.springframework.web.multipart.MultipartFile;

import java.util.List;

import javax.validation.constraints.*;
@javax.annotation.Generated(value = "io.swagger.codegen.languages.SpringCodegen", date = "2017-09-19T22:22:34.882-06:00")

@Controller
public class PersonApiController implements PersonApi {



    public ResponseEntity<Void> addPerson(@ApiParam(value = "Objeto persona que va a ser agregado" ,required=true ) @RequestBody Person body) {
        // do some magic!
        return new ResponseEntity<Void>(HttpStatus.OK);
    }

    public ResponseEntity<Void> deletePerson(@ApiParam(value = "ID de la persona a eliminar",required=true ) @PathVariable("personId") Long personId,
        @ApiParam(value = ""  ) @RequestHeader(value="api_key", required=false) String apiKey) {
        // do some magic!
        return new ResponseEntity<Void>(HttpStatus.OK);
    }

    public ResponseEntity<Person> getPersonById(@ApiParam(value = "ID de la persona a retornar",required=true ) @PathVariable("personId") Long personId) {
        // do some magic!
        return new ResponseEntity<Person>(HttpStatus.OK);
    }

    public ResponseEntity<Void> updatePerson(@ApiParam(value = "Objeto persona que necesita ser actualizado" ,required=true ) @RequestBody Person body) {
        // do some magic!
        return new ResponseEntity<Void>(HttpStatus.OK);
    }

    public ResponseEntity<Void> updatePersonById(@ApiParam(value = "ID de persona que tiene que ser actualizada",required=true ) @PathVariable("personId") Long personId,
        @ApiParam(value = "Nombre actualizado de persona" ) @RequestPart(value="name", required=false)  String name,
        @ApiParam(value = "Primer apellido actualizado de persona" ) @RequestPart(value="lname", required=false)  String lname,
        @ApiParam(value = "Segundo apellido actualizado de persona" ) @RequestPart(value="_2lname", required=false)  String _2lname) {
        // do some magic!
        return new ResponseEntity<Void>(HttpStatus.OK);
    }

}
