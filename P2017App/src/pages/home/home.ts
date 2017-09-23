import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import Web3 from 'web3';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  contractInstance:Web3.Contract;
  web3:Web3;

  constructor(public navCtrl: NavController) {
  	console.log("Creating homepage");
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