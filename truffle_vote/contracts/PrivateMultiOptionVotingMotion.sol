pragma solidity ^0.4.4;
import './VotingMotion.sol';
contract PrivateMultiOptionVotingMotion is VotingMotion {

	function PrivateMultiOptionVotingMotion(address[] v, uint s,uint e,bytes32[] p,bool canSee) 
		VotingMotion(v,s,e,p,canSee)
	{

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
}