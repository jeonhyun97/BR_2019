pragma solidity ^0.4.18;

import "./BCRidersStorage.sol";

contract BCRidersToken is BCRidersStorage {      // contract for token and Ether process

    /* ====================================================================================== */
    // helper storage for token contract
    
    struct Exchange {
        uint tokenAmount;
        bool isFinished;     // initially false. If the owner accepted request (changed to figit money), change it to true
        bool direction;      // Token goes form restaurant to owner: true, opposite: false
    }
    
    mapping (address => Exchange) Exchanges;    // Therefore, it is impossible to send more than one exchange request
    
    // end of helper storage
    /* ====================================================================================== */


    // helper function
    function sendTokenToAccount(uint _amount, address _reciever) internal {    // send token to account
        Token.totalTokenInNetwork += _amount;
        Token.addressToToken[_reciever] += _amount;
    }
    
    function takeTokenBack(uint _amount, address _sender) internal {    // take token back
        require(Token.addressToToken[_sender] >= _amount);   // safety check
        Token.totalTokenInNetwork -= _amount;
        Token.addressToToken[_sender] -= _amount;
    }
    
    
    // interface (public function)
    
    
    // About ether
    function requestEther() public returns (bool) {  // contract needs sufficient ether to handle this -> owner should send sufficient ether right after deploying it.
        if(msg.sender.balance > 5 ether) return false;    // make accounts cannot send request when they have enough balance
        msg.sender.transfer(5 ether);
        return true;
    }
    
    // About Token
    function getTokenInfo(address _address) public view returns (uint) {
        return Token.addressToToken[_address];
    }
    
    function requestExchange(uint _tokenAmount, bool _direction, uint _restIndex) public onlyRestAccount(_restIndex) {      // Send a request about exchanging
        require(Exchanges[msg.sender].isFinished);
        Exchanges[msg.sender].tokenAmount = _tokenAmount;
        Exchanges[msg.sender].isFinished = false;
        Exchanges[msg.sender].direction = _direction;
    }
    
    function validateExchange(uint _restIndex) public onlyOwner {     // validate and process token transfer
        address user = Restaurants[_restIndex].Address;
        require(!Exchanges[user].isFinished);
        
        if(Exchanges[user].direction == true) {   // token goes from rest to owner
            takeTokenBack(Exchanges[user].tokenAmount, user);
        }
        else {  // token goes from owner to rest
            sendTokenToAccount(Exchanges[user].tokenAmount, user);
            Token.totalTokenPublished += Exchanges[user].tokenAmount;
        }
        Exchanges[user].isFinished = true;   
    }
    
    function getRequestExchange() public view onlyOwner returns (address[], uint[], uint[], bool[], uint) {    // Return arrays of untreated request's info: address, rest index, token amount, direction, and the length of these arrays
        address[] memory addressList = new address[](restNum);
        uint[] memory restIndexList = new uint[](restNum);
        uint[] memory tokenAmountList = new uint[](restNum);
        bool[] memory directionList = new bool[](restNum);
        
        
        uint num = 0;
        for(uint i = 0; i < restNum; i++) {
            if(Exchanges[Restaurants[i].Address].isFinished == false) {    // find untreated exchange requests
                addressList[num] = Restaurants[i].Address;
                restIndexList[num] = i;
                tokenAmountList[num] = Exchanges[Restaurants[i].Address].tokenAmount;
                directionList[num] = Exchanges[Restaurants[i].Address].direction;
                num++;
            }
        }
        
        address[] memory shrinkedAddressList = new address[](num);   // shrink it to smaller array
        uint[] memory shrinkedRestIndexList = new uint[](num);
        uint[] memory shrinkedTokenAmountList = new uint[](num);
        bool[] memory shrinkedDirectionList = new bool[](num);
        for(uint j = 0; j < num; j++) {
            shrinkedAddressList[j] = addressList[j];
            shrinkedRestIndexList[j] = restIndexList[j];
            shrinkedTokenAmountList[j] = tokenAmountList[j];
            shrinkedDirectionList[j] = directionList[j];
        }
        
        return (shrinkedAddressList, shrinkedRestIndexList, shrinkedTokenAmountList, shrinkedDirectionList, num);
    }
    
    
}

