pragma solidity ^0.4.4;
import './VotingMotion.sol';
contract PublicMultiOptionVotingMotion is VotingMotion {//DA HARDEST
	mapping(address=>bytes32[]) public chosenMotion;
	bytes32[] public voterNames;//TODO: necessary????

	function PublicMultiOptionVotingMotion(address[] v, uint s,uint e, bytes32[] p,bool canSee,bytes32[] vn) 
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


	function vote(bytes32[] selection)
		onlyVoters()
		onlyOnWindow()
		returns (bool)
	{
		if(areValidOptions(selection) && !voted[msg.sender]) {
			voted[msg.sender] = true;
			for(uint8 i=0;i<selection.length;i++) {
				votes[selection[i]] +=1;
			}
			chosenMotion[msg.sender] = selection;
			return true;
		}
		return false;
	}

	function areValidOptions(bytes32[] selection)
		returns (bool)
	{
		for(uint8 i=0;i<selection.length;i++){
			if(!isValidOption(selection[i])){
				return false;
			}
		}
		return true;
	}

	function voterChoices(uint256 voterID) //Returns the choices of each voter. {voters,choices}
		returns (bytes32[],bytes32[])
	{
		bytes32[] memory choice = chosenMotion[voters[voterID]];
		return (voterNames,choice);
	}

}