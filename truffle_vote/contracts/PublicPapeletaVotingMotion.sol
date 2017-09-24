pragma solidity ^0.4.4;
import './VotingMotion.sol';
contract PublicPapeletaVotingMotion is VotingMotion {
	mapping(address=>bytes32) public chosenMotion;
	bytes32[] public voterNames;//TODO: necessary????


   //TODO: SEE HOW TO PASS THE STRUCTS OF NAMES AND ADDRESSES ALL IN ONE THING.

	// function votersChoices() //Returns the choices of each voter. {voters,choices}
	// 	returns (bytes32[],bytes32[])
	// {
	// 	bytes32[] memory choices = new bytes32[](voters.length);
	// 	for(uint256 i=0;i<voters.length;i++) {
	// 		choices[i] = chosenMotion[voters[i]];
	// 	}
	// 	return (voterNames,choices);
	// }

// 	function vote(bytes32 selection)
// 		onlyVoters()
// 		onlyOnWindow()
// 	{
// 		if(isValidOption(selection) && !voted[msg.sender]) {
// 			voted[msg.sender] = true;
// 			votes[selection] += 1;
// 			return true;
// 		}
// 		return false;
// 	}		
}