web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8545"));
abi = JSON.parse('[{"constant":true,"inputs":[],"name":"numVotes","outputs":[{"name":"","type":"uint8"}],"payable":false,"type":"function"},{"constant":false,"inputs":[],"name":"addVote","outputs":[],"payable":false,"type":"function"},{"inputs":[],"payable":false,"type":"constructor"}]');
VotingContract = web3.eth.contract(abi);
// In your nodejs console, execute contractInstance.address to get the address at which the contract is deployed and change the line below to use your deployed address
contractInstance = VotingContract.at('0x3f844a15a56a0c0fb23fa76ea865bca7a050c2bc');


function addOne(){
	console.log("Adding one!!")
	contractInstance.addVote({from:web3.eth.accounts[0]},function(error,result){
		if(error) {console.log(error)}
		if(result) {console.log(result)}
		console.log("Num votes" + contractInstance.numVotes.toString())
		$("#votes").html(contractInstance.numVotes().toString());
	});
}


$(document).ready(function(){
	$("#votes").html(contractInstance.numVotes().toString());
});