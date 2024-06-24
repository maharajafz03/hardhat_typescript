// SPDX-License-Identifier: MIT

pragma solidity ^0.8.0;

contract token{

    string name = "token";
    string symbol = "mtk";
    uint totalSupply = 1000000;
    address owner;

      mapping(address => uint) public balance;
      event Transfer(address indexed _from, address indexed _to, _value);

    constructor(){
        owner = msg.sender;
        balance[owner] = totalSupply;

    }

    function transfer(address _to, uint _value) public{
        require(balance[owner] >= _value, "insufficent fund");
        require(_to != address(0), "invalid account");

        balance[owner] -= _value;
        balance[_to] += _value;

        emit Transfer(owner, _to, _value);

    }
}