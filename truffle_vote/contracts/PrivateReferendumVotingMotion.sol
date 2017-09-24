pragma solidity ^0.4.4;
import './VotingMotion.sol';
contract PrivateReferendumVotingMotion is VotingMotion {
	bytes32 public firstOption;
	bytes32 public secondOption;

	function PrivateReferendumVotingMotion(address[] v, uint s,uint e,bytes32[] p,bool canSee) 
		VotingMotion(v,s,e,p,canSee) 
	{
		require(p.length==2);
		firstOption = p[0];
		secondOption = p[1];
	}


	function vote(bytes32 selection)
		onlyVoters()
		onlyOnWindow()
		returns (bool)
	{
		if(isValidOption(selection) && !voted[msg.sender]) {
			voted[msg.sender] = true;
			votes[selection] += 1;
			return true;
		}
		return false;
	}
}