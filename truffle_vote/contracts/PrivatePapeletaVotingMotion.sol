pragma solidity ^0.4.4;


/*
Multiples opciones, sólo se puede escoger una
*/
contract PrivatePapeletaVotingMotion {
	address public motionOwner;
	address[] public voters;
	mapping(address=>bool) public allowed;//remove
	mapping(address=>bool) public voted;
	
	bytes32[] public proposals;

	mapping (bytes32=>uint) public votes;
	uint256 public startTime;
	uint256 public endTime;

	bool canSeeResults;

	function PrivatePapeletaVotingMotion(address[] v, uint s,uint e, bytes32[] p,bool canSee) {
		motionOwner = msg.sender;
		voters = v;
		startTime = s;
		endTime = e;
		proposals = p;
		canSeeResults = canSee;
		for(uint i=0;i<voters.length;i++){
			voted[voters[i]] = false;
		}
	}


	modifier onlyOnWindow()
	{
		require (now >= startTime && now < endTime);
		_;
	}

	modifier onlyByOwner() 
	{
		require(msg.sender == motionOwner);
		_;
	}

	modifier onlyVoters()
	{
		bool found = false;
		for(uint i=0;i<2;i++){
			found = found || address(voters[i]) == address(msg.sender);
		}
		require(found);
		_;
	}


	function addVoter(address voter) 
		onlyByOwner() 
	{
		voters.push(voter);
		voted[voter] = false;
	} 

	function removeVoter(address voter) 
		onlyByOwner() 
	{
		voters.push(voter);
		voted[voter] = false;
	} 

	function vote(bytes32 selection) 
		onlyVoters()
	    // onlyOnWindow() //bug due to js dates
		returns (bool)
	{ //TODO: ADD MULTIPLE USE CASES.
		if(userFound() && isValidOption(selection) && !voted[msg.sender]) {
			voted[msg.sender] = true;
			votes[selection] += 1;
			return true;
		}
		return false;
	}

	function isOwner() returns (bool){
		return msg.sender == motionOwner;
	}

	function isFound() returns (bool){
		return (voters[0] == msg.sender || voters[1] == msg.sender);
	}

	function userFound() returns (bool){
		for(uint i=0;i<voters.length;i++){
			if(voters[i] == msg.sender) {
				return true;
			}
		}
		return false;
	}

	function userCount() returns (uint){
		uint len = 0;
		for(uint i=0;i<voters.length;i++){
			//found = found || (voters[i] == msg.sender);
			len++;
		}
		return len;
	}

	function showResults() onlyByOwner() returns (bytes32[],uint[]) {
		uint[] memory res;
		for(uint8 i=0;i<proposals.length;i++) {
			res[i] = votes[ proposals[i] ];		
 		}
		// props = proposals;
		// r = res;
		return (proposals,res);
	}

	function showVoters() constant returns (address[]) 
	{
		return voters;
	}

	function isClosed() constant returns (bool)
	{
		return now > endTime;
	}

	function nowVal() constant returns (uint256)
	{
		return now;
	}

	function isValidOption(bytes32 selection) returns (bool isValid)
	{
		for(uint8 i=0;i<proposals.length;i++) {
			if(proposals[i] == selection) {
				return true;
			}
		}
		return false;
	}
}