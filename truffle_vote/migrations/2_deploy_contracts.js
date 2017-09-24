// var ConvertLib = artifacts.require("./ConvertLib.sol");
// var MetaCoin = artifacts.require("./MetaCoin.sol");
// var SingleVote = artifacts.require("./SingleVote.sol");
var PrivatePapeletaVotingMotion = artifacts.require("./PrivatePapeletaVotingMotion.sol");

var v1 = web3.eth.accounts[0];
var v2 = web3.eth.accounts[1];
var v3 = web3.eth.accounts[2];
var v4 = web3.eth.accounts[3];

module.exports = function(deployer) {
  deployer.deploy(PrivatePapeletaVotingMotion,[v1,v2],Date.parse("2015-01-01").UTC,Date.parse("2018-01-31").UTC,["proposal1","proposal2"],true);
};
