pragma solidity ^0.4.4;
import 'VotingMotion.sol';
contract PublicPapeletaVotingMotion is VotingMotion {
	mapping(address=>bytes32) public chosenMotion;
	bytes32 public voterNames;//TODO: necessary????

	// function votersList() 
	// 	returns (bytes32[],bytes32[)
	// {
	// 	for(uint256 i=0;i<voters.length;i++) {
			
	// 	}
	// }


}