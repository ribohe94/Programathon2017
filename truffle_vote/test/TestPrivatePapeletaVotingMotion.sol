pragma solidity ^0.4.4;

import "truffle/Assert.sol";
import "truffle/DeployedAddresses.sol";
import "../contracts/PrivatePapeletaVotingMotion.sol";


contract TestPrivatePapeletaVotingMotion {
	address testAdd1;
	address testAdd2;
	function TestBAToken(address address1, address address2) {
	    testAdd1 = address1;
	    testAdd2 = address2;
  	}

	function testInitialVoters() {
		PrivatePapeletaVotingMotion meta = PrivatePapeletaVotingMotion(DeployedAddresses.PrivatePapeletaVotingMotion());
		address expected = testAdd1;
		// Assert.equal(meta.voters(0),expected,"error");
		// Assert.equal(uint(1),uint(1),"error");
	}
}