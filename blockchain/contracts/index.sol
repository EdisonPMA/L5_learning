// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;
contract bank{
    uint public balance;
    uint public sum;
    uint public sub;
    function deposite(uint amount) public returns(uint){
         balance = balance+amount;
         return  balance;
    }
    function add(uint a, uint b) public   returns(uint){
        sum=a+b;
        return sum;
    }
    function subst(uint a, uint b)public returns(uint){
        sub=a-b;
        return sub;
    }
}
