//test

/*
[ '0x25c7390aae1b261c69855719799f24d1e330f710',
  '0x932fb30cc86c3f075b71be2107d50e314fb870be',
  '0x6915315832cf1d81c995d9f62d54c49886208a34',
  '0x33f70daba26167e0e6f78697aff6c228637e1ab2',
  '0x22959856f308fb144eceffd9bba75660e2455dc9',
  '0x6a32f76dc2e4bc5b543ca3602e967b809df7184e',
  '0x924f4929974ce6ad5d9552541c9237944f9ea572',
  '0x9cf6bd1ca491c588e99753d7aa7e22d01cd574c4',
  '0xb2bdb854e8a478a262520240d896674ebca5dea7',
  '0xfab8c3f0180756678d3c5a6860fb807bcdd4899e' ]



*/
var v1 = web3.eth.accounts[0]
var v2 = web3.eth.accounts[1]
var v3 = web3.eth.accounts[2]
compile
migrate --reset
var owner = web3.eth.coinbase;


var meta;
var show = function(c){console.log(c)}
var init = function(depl){depl.deployed().then(function(instance){meta=instance});}
// VotingMotion.deployed().then(function(instance){meta=instance});




//Test voting
compile
migrate --reset
var meta = null;
PrivatePapeletaVotingMotion.deployed().then(function(instance){meta=instance});
meta.showResults.call()
meta.vote("proposal1",{from:v1}).then(show)
meta.voters()
meta.vote("proposal1",{from:v2}).then(show)
meta.vote.call("proposal1",{from:v1}).then(show)
meta.votes("proposal1")
meta.userCount.call({from:v2})
meta.userFound.call({from:v2})
meta.vote.call("proposal1",{from:v2});
meta.vote.call("proposal1",{from:v3});
meta.votes("proposal1")
meta.voters(0)
meta.voters(1)
var x;
var x = meta.proposals(0).then((x)=>console.log(x))
var x = "0x70726f706f73616c310000000000000000000000000000000000000000000000"




meta.addVoter(v1).then(function(x,e){console.log(x);})
meta.new().showVoters().then(function(r){console.log(r)})
meta.vote("Anarquia",{from:v1}).then(function(instance){meta=instance});



