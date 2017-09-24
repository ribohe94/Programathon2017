import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import Web3 from 'web3';
// import contract from 'truffle-contract';
import { Http,Headers } from '@angular/http';
import { Injectable } from '@angular/core';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
@Injectable()
export class HomePage {
  contractInstance:Web3.Contract;
  web3:Web3;
  keyServer:String = "http://localhost:3000";

  constructor(public navCtrl: NavController,public http: Http) {
  	this.http = http;
  	console.log("Creating homepage");

	this.http.post(this.keyServer + "/sample", {headers: new Headers()}).subscribe(res=>
		console.log("Pkeys: ",res)
	,err=>console.error(err));
	// debugger;
	this.web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8545"));
	var abi = JSON.parse('[{"constant":true,"inputs":[],"name":"numVotes","outputs":[{"name":"","type":"uint8"}],"payable":false,"type":"function"},{"constant":false,"inputs":[],"name":"addVote","outputs":[],"payable":false,"type":"function"},{"inputs":[],"payable":false,"type":"constructor"}]');
	var VotingContract = this.web3.eth.contract(abi);
	// debugger;
	this.contractInstance = VotingContract.at('0x01f1ec46129a350c659637ff5cb9c12bb9c9d5af');


	// console.log(contractInstance);
  }

  addVote() {
	console.log("Adding vote");
	console.log(this.contractInstance)
	var ci = this.contractInstance;
	this.contractInstance.addVote({from:this.web3.eth.coinbase},function(){
		console.log("VOTE SUBMITTED");

		console.log("Get me the votes!!!! " + ci.numVotes())
	});

  }

}
