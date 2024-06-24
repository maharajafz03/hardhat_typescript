pragma solidity version;



contract Name {
    

    string name = 'tokens';
    uint value = 500;
    uint total value;

    mapping (address => uint) public balance;
     
    event withdraw(address indexed, uint _value)
      
    function pay(address _lottery, string memory _value) public {
     
        balance[msg.sender] = _value;
        require(value == balance[msg.sender], "you should pay 500 ");
        total value += balance[msg.sender];        
    }

    function withdraw(address _lottery, string memory _value1) public{
      require(balance[msg.sender] == _value1, "incorrect tokens");
      total value -= _value1;
      balance[msg.sender] += _value1;  

      emit(msg.sender, _value1)
    }
}