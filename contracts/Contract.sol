// SPDX-License-Identifier: MIT
pragma solidity ^0.7.6;

import "@openzeppelin/contracts-upgradeable/proxy/Initializable.sol";

/**
 * @title A Smart Contract Upgradeable
 * @author Rafael Romero (@rafius97)
 */
contract Contract is Initializable {
    string public name;

    function initialize() external initializer {
        name = "Test contract upgradeables";
    }
}
