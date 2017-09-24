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
	var web3 = new Web3(new Web3.providers.HttpProvider("http://127.0.0.1:8545"))
	var abi = JSON.parse('[{"constant":true,"inputs":[{"name":"","type":"uint256"}],"name":"proposals","outputs":[{"name":"","type":"bytes32"}],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"showVoters","outputs":[{"name":"","type":"address[]"}],"payable":false,"type":"function"},{"constant":false,"inputs":[],"name":"userCount","outputs":[{"name":"","type":"uint256"}],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"canSeeResults","outputs":[{"name":"","type":"bool"}],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"motionOwner","outputs":[{"name":"","type":"address"}],"payable":false,"type":"function"},{"constant":true,"inputs":[{"name":"","type":"bytes32"}],"name":"votes","outputs":[{"name":"","type":"uint32"}],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"endTime","outputs":[{"name":"","type":"uint256"}],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"nowVal","outputs":[{"name":"","type":"uint256"}],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"selection","type":"bytes32"}],"name":"isValidOption","outputs":[{"name":"isValid","type":"bool"}],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"startTime","outputs":[{"name":"","type":"uint256"}],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"selection","type":"bytes32"}],"name":"vote","outputs":[{"name":"","type":"bool"}],"payable":false,"type":"function"},{"constant":true,"inputs":[{"name":"","type":"address"}],"name":"voted","outputs":[{"name":"","type":"bool"}],"payable":false,"type":"function"},{"constant":false,"inputs":[],"name":"showResults","outputs":[{"name":"","type":"uint32[]"}],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"isClosed","outputs":[{"name":"","type":"bool"}],"payable":false,"type":"function"},{"constant":true,"inputs":[{"name":"","type":"uint256"}],"name":"voters","outputs":[{"name":"","type":"address"}],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"voter","type":"address"}],"name":"addVoter","outputs":[],"payable":false,"type":"function"},{"constant":false,"inputs":[],"name":"userFound","outputs":[{"name":"","type":"bool"}],"payable":false,"type":"function"},{"inputs":[{"name":"v","type":"address[]"},{"name":"s","type":"uint256"},{"name":"e","type":"uint256"},{"name":"p","type":"bytes32[]"},{"name":"canSee","type":"bool"}],"payable":true,"type":"constructor"}]');	
	var bc = "0x6060604052604051610b06380380610b068339810160405280805182019190602001805191906020018051919060200180518201919060200180519150505b60008054600160a060020a03191633600160a060020a0316179055600185805161006c9291602001906100a4565b5060058490556006839055600382805161008a92916020019061010c565b506007805460ff19168215151790555b50505050506101a6565b8280548282559060005260206000209081019282156100fb579160200282015b828111156100fb5782518254600160a060020a031916600160a060020a0391909116178255602092909201916001909101906100c4565b5b5061010892915061015a565b5090565b828054828255906000526020600020908101928215610149579160200282015b82811115610149578251825560209092019160019091019061012c565b5b50610108929150610185565b5090565b61018291905b80821115610108578054600160a060020a0319168155600101610160565b5090565b90565b61018291905b80821115610108576000815560010161018b565b5090565b90565b610951806101b56000396000f300606060405236156100ee5763ffffffff7c0100000000000000000000000000000000000000000000000000000000600035041663013cf08b81146100f3578063023199571461011b57806307973ccf14610182578063161d4c22146101a7578063292df9e5146101ce5780632b38cd96146101fd5780633197cbb61461022c578063367036e014610251578063650fd28a1461027657806378e97925146102a0578063a69beaba146102c5578063aec2ccae146102ef578063aec9e11814610322578063c2b6b58c14610389578063da58c7d9146103b0578063f4ab9adf146103e2578063f562465914610403575b600080fd5b34156100fe57600080fd5b61010960043561042a565b60405190815260200160405180910390f35b341561012657600080fd5b61012e61044d565b60405160208082528190810183818151815260200191508051906020019060200280838360005b8381101561016e5780820151818401525b602001610155565b505050509050019250505060405180910390f35b341561018d57600080fd5b6101096104b6565b60405190815260200160405180910390f35b34156101b257600080fd5b6101ba6104dd565b604051901515815260200160405180910390f35b34156101d957600080fd5b6101e16104e6565b604051600160a060020a03909116815260200160405180910390f35b341561020857600080fd5b6102136004356104f5565b60405163ffffffff909116815260200160405180910390f35b341561023757600080fd5b61010961050d565b60405190815260200160405180910390f35b341561025c57600080fd5b610109610513565b60405190815260200160405180910390f35b341561028157600080fd5b6101ba600435610518565b604051901515815260200160405180910390f35b34156102ab57600080fd5b610109610570565b60405190815260200160405180910390f35b34156102d057600080fd5b6101ba600435610576565b604051901515815260200160405180910390f35b34156102fa57600080fd5b6101ba600160a060020a03600435166106a9565b604051901515815260200160405180910390f35b341561032d57600080fd5b61012e6106be565b60405160208082528190810183818151815260200191508051906020019060200280838360005b8381101561016e5780820151818401525b602001610155565b505050509050019250505060405180910390f35b341561039457600080fd5b6101ba610793565b604051901515815260200160405180910390f35b34156103bb57600080fd5b6101e160043561079c565b604051600160a060020a03909116815260200160405180910390f35b34156103ed57600080fd5b610401600160a060020a03600435166107ce565b005b341561040e57600080fd5b6101ba610845565b604051901515815260200160405180910390f35b600380548290811061043857fe5b906000526020600020900160005b5054905081565b6104556108b6565b60018054806020026020016040519081016040528092919081815260200182805480156104ab57602002820191906000526020600020905b8154600160a060020a0316815260019091019060200180831161048d575b505050505090505b90565b600080805b6001548110156104d4576001909101905b6001016104bb565b8192505b505090565b60075460ff1681565b600054600160a060020a031681565b60046020526000908152604090205463ffffffff1681565b60065481565b425b90565b6000805b60035460ff82161015610565576003805484919060ff841690811061053d57fe5b906000526020600020900160005b5054141561055c576001915061056a565b5b60010161051c565b600091505b50919050565b60055481565b600080805b60028110156105da5781806105cf575033600160a060020a03166001828154811015156105a457fe5b906000526020600020900160005b9054906101000a9004600160a060020a0316600160a060020a0316145b91505b60010161057b565b8115156105e657600080fd5b60055442101580156105f9575060065442105b151561060457600080fd5b61060c610845565b801561061c575061061c84610518565b5b80156106425750600160a060020a03331660009081526002602052604090205460ff16155b1561069b57600160a060020a0333166000908152600260209081526040808320805460ff191660019081179091558784526004909252909120805463ffffffff80821684011663ffffffff1990911617905592506106a0565b600092505b5b5b5050919050565b60026020526000908152604090205460ff1681565b6106c66108b6565b6106ce6108b6565b6000805433600160a060020a039081169116146106ea57600080fd5b6003546040518059106106fa5750595b908082528060200260200182016040525b509150600090505b60035460ff821610156104d4576004600060038360ff1681548110151561073657fe5b906000526020600020900160005b5054815260208101919091526040016000205463ffffffff168260ff83168151811061076c57fe5b63ffffffff9092166020928302909101909101525b600101610713565b8192505b5b505090565b60065442115b90565b60018054829081106107aa57fe5b906000526020600020900160005b915054906101000a9004600160a060020a031681565b60005433600160a060020a039081169116146107e957600080fd5b600180548082016107fa83826108da565b916000526020600020900160005b8154600160a060020a038086166101009390930a838102910219909116179091556000908152600260205260409020805460ff19169055505b5b50565b6000805b6001548110156108ad5733600160a060020a031660018281548110151561086c57fe5b906000526020600020900160005b9054906101000a9004600160a060020a0316600160a060020a031614156108a457600191506108b2565b5b600101610849565b600091505b5090565b60206040519081016040526000815290565b60206040519081016040526000815290565b8154818355818115116108fe576000838152602090206108fe918101908301610904565b5b505050565b6104b391905b808211156108b2576000815560010161090a565b5090565b905600a165627a7a72305820a0cf8538e3b6177bb5411a0cd42f732af87131aeef6e46c6905b62231f70dbd50029"
	var accs = web3.eth.accounts.slice(0,3)
	var PrivatePapeletaVotingMotion = web3.eth.contract(abi)
	var self = this;
	console.log(web3.version)
	console.log(web3.eth.accounts)
	var accnt = web3.eth.coinbase
	web3.eth.defaultAccount = accnt


	console.log("Running from: ",accnt)
	// web3.personal.unlockAccount(accnt, "1111");
	console.log("Available balance: ",web3.eth.getBalance(accnt))
	// var cData = PrivatePapeletaVotingMotion.new.getData(accs,148322880,158322880,["a","b"],true,{data:bc})
	var cData = PrivatePapeletaVotingMotion.new.getData({data:bc})

	var estimate = web3.eth.estimateGas({data: cData})
	console.log("estimated ether: ",estimate)
	// debugger;
	console.log("max gas",web3.eth.getBlock("latest"))
	var contr = PrivatePapeletaVotingMotion.new(accs,148322880,158322880,["a","b"],true,{from:accnt,gas:2000000,ḑata:bc,gasPrice:1})
	// PrivatePapeletaVotingMotion.new({from:accnt,gas:4000000,gasPrice:20000000000,ḑata:bc}).then(console.log)
	console.log(contr)
	// var contr = PrivatePapeletaVotingMotion.at("0xe9a6ca40e4833aeaa0028987687e443db80e61c3")
	// console.log("contr",contr)
	// console.log(contr.numVotes())

	//    "web3": "0.20.0",
	// debugger;
  	this.http.post(this.keyServer + "/sample", {headers: new Headers()}).subscribe((res)=>{ //TODO: ADD VOTERS AS PARAMETERS AND CHANGE /sample endpoint for /register. (See key_server/app.js)
  		var r = JSON.parse(res["_body"])// [{email:...,privateKey:...,address:...}] (adresss is public key.)
  		//Deploy contract
  		var addresses = r.map(o=>o.address)
  		var f = self.formVals
  		var propositions = ["a","b","c"];//TODO ADD TO FORM
  		var canSee = false; //TODO  ADD TO FORM
  		console.log(addresses,self.solDate(f.startDate),self.solDate(f.endDate),propositions,canSee,{from:accnt})
  		// debugger;
  		// VotingContract.new(addresses,self.solDate(f.startDate),self.solDate(f.endDate),propositions,canSee,{from:accnt,gas:40000000000})
  		console.log("called testrpc")
		//TODO: PUT HERE THE CALL TO RUBY SERVER TO SEND EMAILS WITH KEYS!!!!!!!!
  		
  	})
		 // console.log(JSON.parse(res._body)));

		 
	// ,err=>console.error(err));
	//Creating and deploying the contract.






  }

}