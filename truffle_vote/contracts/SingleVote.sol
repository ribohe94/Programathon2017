pragma solidity ^0.4.11;

contract SingleVote {
	uint8 public numVotes;
	address[] authorized;

	function SingleVote() payable {
		numVotes = 0;
	}

	function addVote() {
		numVotes += 1;
	}
}