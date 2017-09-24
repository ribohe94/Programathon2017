pragma solidity ^0.4.4;
import './VotingMotion.sol';
contract PublicReferendumVotingMotion is VotingMotion {
	mapping(address=>bytes32) public chosenMotion;
	bytes32[] public voterNames;//TODO: necessary????
	bytes32 public firstOption;
	bytes32 public secondOption;

	function PublicReferendumVotingMotion(address[] v, uint s,uint e, bytes32[] p,bool canSee,bytes32[] vn) 
		VotingMotion(v,s,e,p,canSee) 
	{
		require(p.length==2);
		firstOption = p[0];
		secondOption = p[1];
		voterNames = vn;
	}

	function addVoter(address voter,bytes32 name) 
		onlyByOwner() 
	{
		addVoter(voter);
		voterNames.push(name);
	} 


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