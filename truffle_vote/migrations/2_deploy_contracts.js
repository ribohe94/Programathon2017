// var ConvertLib = artifacts.require("./ConvertLib.sol");
// var MetaCoin = artifacts.require("./MetaCoin.sol");
var SingleVote = artifacts.require("./SingleVote.sol");
var PrivatePapeletaVotingMotion = artifacts.require("./PrivatePapeletaVotingMotion.sol");

var v1 = web3.eth.accounts[0];
var v2 = web3.eth.accounts[1];
var v3 = web3.eth.accounts[2];
var v4 = web3.eth.accounts[3];
Date.prototype.getUnixTime = function() { return this.getTime()/1000|0 };
var unix = (str)=>Date.parse(str)/1000|0;
module.exports = function(deployer) {
  deployer.deploy(PrivatePapeletaVotingMotion,[v1,v2],unix("2015-01-01"),unix("2018-01-31"),["proposal1","proposal2"],true);
  deployer.deploy(SingleVote);
};
