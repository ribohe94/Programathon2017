package io.swagger.api;

import io.swagger.model.Candidate;

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
public class CandidateApiController implements CandidateApi {



    public ResponseEntity<Void> addCandidate(@ApiParam(value = "Objeto persona que va a ser agregado" ,required=true ) @RequestBody Candidate body) {
        // do some magic!
        return new ResponseEntity<Void>(HttpStatus.OK);
    }

    public ResponseEntity<Void> deleteCandidate(@ApiParam(value = "ID del candidato a eliminar",required=true ) @PathVariable("candidateId") Long candidateId,
        @ApiParam(value = ""  ) @RequestHeader(value="api_key", required=false) String apiKey) {
        // do some magic!
        return new ResponseEntity<Void>(HttpStatus.OK);
    }

    public ResponseEntity<Candidate> getCandidateById(@ApiParam(value = "ID del candidato a retornar",required=true ) @PathVariable("candidateId") Long candidateId) {
        // do some magic!
        return new ResponseEntity<Candidate>(HttpStatus.OK);
    }

    public ResponseEntity<Void> updateCanbdidate(@ApiParam(value = "Objeto candidato que necesita ser actualizado" ,required=true ) @RequestBody Candidate body) {
        // do some magic!
        return new ResponseEntity<Void>(HttpStatus.OK);
    }

    public ResponseEntity<Void> updateCandidateById(@ApiParam(value = "ID de candidato que tiene que ser actualizado",required=true ) @PathVariable("candidateId") Long candidateId,
        @ApiParam(value = "Nombre actualizado del candidato" ) @RequestPart(value="name", required=false)  String name,
        @ApiParam(value = "Primer apellido actualizado del candidato" ) @RequestPart(value="lname", required=false)  String lname,
        @ApiParam(value = "Segundo apellido actualizado del candidato" ) @RequestPart(value="_2lname", required=false)  String _2lname) {
        // do some magic!
        return new ResponseEntity<Void>(HttpStatus.OK);
    }

}
