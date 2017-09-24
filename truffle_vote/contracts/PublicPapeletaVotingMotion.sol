pragma solidity ^0.4.4;
import './VotingMotion.sol';
contract PublicPapeletaVotingMotion is VotingMotion {
	mapping(address=>bytes32) public chosenMotion;
	bytes32[] public voterNames;//TODO: necessary????

	function PublicPapeletaVotingMotion(address[] v, uint s,uint e, bytes32[] p,bool canSee,bytes32[] vn) 
		VotingMotion(v,s,e,p,canSee) 
	{
		voterNames = vn;
	}

	function addVoter(address voter,bytes32 name) 
		onlyByOwner() 
	{
		addVoter(voter);
		voterNames.push(name);
	} 


   //TODO: SEE HOW TO PASS THE STRUCTS OF NAMES AND ADDRESSES ALL IN ONE THING.

	function votersChoices() //Returns the choices of each voter. {voters,choices}
		returns (bytes32[],bytes32[])
	{
		bytes32[] memory choices = new bytes32[](voters.length);
		for(uint256 i=0;i<voters.length;i++) {
			choices[i] = chosenMotion[voters[i]];
		}
		return (voterNames,choices);
	}

	function vote(bytes32 selection)
		onlyVoters()
		onlyOnWindow()
		returns (bool)
	{
		if(isValidOption(selection) && !voted[msg.sender]) {
			voted[msg.sender] = true;
			votes[selection] += 1;
			chosenMotion[msg.sender] = selection;
			return true;
		}
		return false;
	}		
}