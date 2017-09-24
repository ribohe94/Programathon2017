import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import Web3 from 'web3';
import { Http,Headers,Response } from '@angular/http';

@Component({
  selector: 'page-event-manager',
  templateUrl: 'eventmanager.html'
})
export class EventManagerPage {
	web3:Web3;
	keyServer:String = "http://localhost:3000";
	formVals = {
		eventName: "test",
		topic: "test",
		startDate: "2017-01-01",
		endDate: "2018-01-01",
		voteFormat: "papeleta",
		voteType: "publica",
		voters:"a@a.com"
	}

	ibus = {
		privatePapeleta: '[{"constant":true,"inputs":[{"name":"","type":"uint256"}],"name":"proposals","outputs":[{"name":"","type":"bytes32"}],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"showVoters","outputs":[{"name":"","type":"address[]"}],"payable":false,"type":"function"},{"constant":false,"inputs":[],"name":"userCount","outputs":[{"name":"","type":"uint256"}],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"canSeeResults","outputs":[{"name":"","type":"bool"}],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"motionOwner","outputs":[{"name":"","type":"address"}],"payable":false,"type":"function"},{"constant":true,"inputs":[{"name":"","type":"bytes32"}],"name":"votes","outputs":[{"name":"","type":"uint256"}],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"endTime","outputs":[{"name":"","type":"uint256"}],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"nowVal","outputs":[{"name":"","type":"uint256"}],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"selection","type":"bytes32"}],"name":"isValidOption","outputs":[{"name":"isValid","type":"bool"}],"payable":false,"type":"function"},{"constant":false,"inputs":[],"name":"isFound","outputs":[{"name":"","type":"bool"}],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"startTime","outputs":[{"name":"","type":"uint256"}],"payable":false,"type":"function"},{"constant":false,"inputs":[],"name":"isOwner","outputs":[{"name":"","type":"bool"}],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"selection","type":"bytes32"}],"name":"vote","outputs":[{"name":"","type":"bool"}],"payable":false,"type":"function"},{"constant":true,"inputs":[{"name":"","type":"address"}],"name":"voted","outputs":[{"name":"","type":"bool"}],"payable":false,"type":"function"},{"constant":false,"inputs":[],"name":"showResults","outputs":[{"name":"","type":"uint256[]"}],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"isClosed","outputs":[{"name":"","type":"bool"}],"payable":false,"type":"function"},{"constant":true,"inputs":[{"name":"","type":"uint256"}],"name":"voters","outputs":[{"name":"","type":"address"}],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"voter","type":"address"}],"name":"addVoter","outputs":[],"payable":false,"type":"function"},{"constant":false,"inputs":[],"name":"userFound","outputs":[{"name":"","type":"bool"}],"payable":false,"type":"function"},{"constant":false,"inputs":[],"name":"test","outputs":[{"name":"","type":"bool"}],"payable":false,"type":"function"},{"inputs":[{"name":"v","type":"address[]"},{"name":"s","type":"uint256"},{"name":"e","type":"uint256"},{"name":"p","type":"bytes32[]"},{"name":"canSee","type":"bool"}],"payable":false,"type":"constructor"}]'
	}
  constructor(public navCtrl: NavController,public http:Http) {
  	this.web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8545"));//TODO CHANGE FOR DEPLOY.
  }

  solDate(x:string){
  	return Date.parse(x)/10000|0;
  }


  createEvent() {
  	console.log("Creating event",this.formVals)
  	// Getting the public keys.
  	var emails = this.formVals.voters;
  	// var accounts = emails.split(",")
  	// 	.map((e)=>{return{
  	// 		email: e,
  	// 		a: this.web3.eth.accounts.create(e)
  	// 	}})
  	// 	.map(acc=>{return{email:acc.email,privateKey:acc.a.privateKey,address:acc.a.address}});
	var abi = JSON.parse(this.ibus.privatePapeleta);//TODO: add the rest
	var VotingContract = this.web3.eth.contract(abi)
	var self = this;
  	this.http.post(this.keyServer + "/sample", {headers: new Headers()}).subscribe((res)=>{ //TODO: ADD VOTERS AS PARAMETERS AND CHANGE /sample endpoint for /register. (See key_server/app.js)
  		var r = JSON.parse(res["_body"])// [{email:...,privateKey:...,address:...}] (adresss is public key.)
  		//Deploy contract
  		var addresses = r.map(o=>o.address)
  		var f = self.formVals
  		var propositions = ["a","b","c"];//TODO ADD TO FORM
  		var canSee = false; //TODO  ADD TO FORM
  		console.log(addresses,self.solDate(f.startDate),self.solDate(f.endDate),propositions,canSee)
  		debugger;
  		VotingContract.new(addresses,self.solDate(f.startDate),self.solDate(f.endDate),propositions,canSee,{from:"0x97065dfc4d3bae46f80c6bfd22df5b171c4d2dc5"})
  		console.log("called testrpc")
		//TODO: PUT HERE THE CALL TO RUBY SERVER TO SEND EMAILS WITH KEYS!!!!!!!!
  		
  	})
		 // console.log(JSON.parse(res._body)));

		 
	// ,err=>console.error(err));
	//Creating and deploying the contract.






  }

}