//SPDX-License-Identifier:MIT
pragma solidity 0.8.17;

contract Token {
    string public name = "Deep coin";
    string public symbol = "DC";
    uint public totalSupply = 2000;
    address public owner;
    mapping(address => uint) balances;

    constructor() {
        owner = msg.sender;
        balances[owner] = totalSupply;
    }

    function transfer(address _to, uint _amt) external {}

    function balancesOf(address _account) public view returns (uint) {
        return balances[_account];
    }
}
