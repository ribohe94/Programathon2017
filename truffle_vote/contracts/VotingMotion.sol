pragma solidity ^0.4.4;

contract VotingMotion {
	address public motionOwner;
	address[] public voters;
	bytes32[] public proposals;
	mapping(address=>bool) public voted;
	mapping (bytes32=>uint) public votes;
	uint256 public startTime;
	uint256 public endTime;
	bool public isOpenVote;

	function VotingMotion(address[] v, uint s,uint e, bytes32[] p,bool canSee) {
		motionOwner = msg.sender;
		voters = v;
		startTime = s;
		endTime = e;
		proposals = p;
		isOpenVote = canSee;
		for(uint i=0;i<voters.length;i++){
			voted[voters[i]] = false;
		}
	}

	function showResults() 
		onlyByOwner() 
		onlyIfOpenVoteOrClosed()
	returns (bytes32[],uint[]) {
		uint[] memory res;
		for(uint8 i=0;i<proposals.length;i++) {
			res[i] = votes[ proposals[i] ];		
 		}
		// props = proposals;
		// r = res;
		return (proposals,res);
	}

	function isClosed() constant returns (bool)
	{
		return now > endTime;
	}

	function addVoter(address voter) 
		onlyByOwner() 
		internal
	{
		voters.push(voter);
		voted[voter] = false;
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

	function  numVoters() internal returns (uint256)
	{
		return voters.length;
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

	modifier onlyIfOpenVoteOrClosed()
	{
		require(isOpenVote || isClosed());
		_;
	}
}