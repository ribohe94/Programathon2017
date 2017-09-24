pragma solidity ^0.4.4;

contract SingleVote {
	uint8 public numVotes;
	address[] authorized;

	function SingleVote() {
		numVotes = 0;
	}

	function addVote() {
		numVotes += 1;
	}
}