// var ConvertLib = artifacts.require("./ConvertLib.sol");
// var MetaCoin = artifacts.require("./MetaCoin.sol");
// var SingleVote = artifacts.require("./SingleVote.sol");
var PrivatePapeletaVotingMotion = artifacts.require("./PrivatePapeletaVotingMotion.sol");

var v1 =  "0x25c7390aae1b261c69855719799f24d1e330f710"
var v2 =  "0x932fb30cc86c3f075b71be2107d50e314fb870be"
var v3 =  "0x6915315832cf1d81c995d9f62d54c49886208a34"
var v4 =  "0x33f70daba26167e0e6f78697aff6c228637e1ab2"

module.exports = function(deployer) {
  deployer.deploy(PrivatePapeletaVotingMotion,[v1,v2],Date.parse("2015-01-01").UTC,Date.parse("2018-01-31").UTC,["proposal1","proposal2"],true);
};
