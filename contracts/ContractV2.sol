// SPDX-License-Identifier: MIT
pragma solidity ^0.7.6;

import "./Contract.sol";

/**
 * @title A Smart Contract Upgradeable Version 2
 * @author Rafael Romero (@rafius97)
 */
contract ContractV2 is Contract {
    function setName(string memory _name) external {
        name = _name;
    }
}
