var contract;
var contractABI = [ { "constant": true, "inputs": [ { "name": "", "type": "uint256" } ], "name": "Reviews", "outputs": [ { "name": "restIndex", "type": "uint256" }, { "name": "stuIndex", "type": "uint256" }, { "name": "title", "type": "string" }, { "name": "content", "type": "string" }, { "name": "reply", "type": "string" }, { "name": "isReply", "type": "bool" }, { "name": "index", "type": "uint256" } ], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": false, "inputs": [ { "name": "_amount", "type": "uint256" }, { "name": "_isUserToOwner", "type": "bool" } ], "name": "reqExchange", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": true, "inputs": [ { "name": "", "type": "uint256" } ], "name": "Users", "outputs": [ { "name": "isStudent", "type": "bool" }, { "name": "nickname", "type": "uint256" }, { "name": "name", "type": "string" }, { "name": "depart_category", "type": "uint256" }, { "name": "tokenPromise", "type": "uint256" }, { "name": "token", "type": "uint256" }, { "name": "index", "type": "uint256" } ], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": false, "inputs": [], "name": "distributeToken", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": false, "inputs": [ { "name": "_tokenPromise", "type": "uint256" } ], "name": "changeTokenPromise", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": true, "inputs": [ { "name": "_category", "type": "uint256" } ], "name": "getRestIndex", "outputs": [ { "name": "", "type": "uint256[]", "value": [] }, { "name": "", "type": "uint256[]", "value": [] }, { "name": "", "type": "uint256", "value": "0" } ], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": false, "inputs": [ { "name": "_reviewIndex", "type": "uint256" }, { "name": "_reply", "type": "string" } ], "name": "writeReply", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": true, "inputs": [ { "name": "_restIndex", "type": "uint256" } ], "name": "getMenuIndex", "outputs": [ { "name": "", "type": "uint256[]", "value": [] }, { "name": "", "type": "uint256", "value": "0" } ], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": false, "inputs": [ { "name": "_restIndex", "type": "uint256" }, { "name": "_receiveAddress", "type": "string" }, { "name": "_tokenUsed", "type": "uint256" }, { "name": "_actualPrice", "type": "uint256" } ], "name": "orderFood", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": true, "inputs": [ { "name": "", "type": "uint256" } ], "name": "Exchanges", "outputs": [ { "name": "userIndex", "type": "uint256" }, { "name": "amount", "type": "uint256" }, { "name": "isUserToOwner", "type": "bool" }, { "name": "isConfirmed", "type": "bool" }, { "name": "index", "type": "uint256" }, { "name": "userName", "type": "string" } ], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [], "name": "isStuOrRest", "outputs": [ { "name": "", "type": "bool", "value": false } ], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [ { "name": "", "type": "uint256" } ], "name": "Orders", "outputs": [ { "name": "restIndex", "type": "uint256" }, { "name": "stuIndex", "type": "uint256" }, { "name": "receiveAddress", "type": "string" }, { "name": "tokenUsed", "type": "uint256" }, { "name": "actualPrice", "type": "uint256" } ], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [ { "name": "", "type": "uint256" } ], "name": "Menus", "outputs": [ { "name": "menuName", "type": "string" }, { "name": "restIndex", "type": "uint256" }, { "name": "menuPrice", "type": "uint256" }, { "name": "explanation", "type": "string" } ], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [ { "name": "_userIndex", "type": "uint256" } ], "name": "getReviewIndex", "outputs": [ { "name": "", "type": "uint256[]", "value": [] }, { "name": "", "type": "uint256", "value": "0" } ], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [ { "name": "", "type": "address" } ], "name": "userIndex", "outputs": [ { "name": "", "type": "uint256", "value": "0" } ], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [], "name": "getExchangeIndex", "outputs": [ { "name": "", "type": "uint256[]", "value": [] }, { "name": "", "type": "uint256", "value": "0" } ], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [ { "name": "_nickname", "type": "uint256" } ], "name": "signIn", "outputs": [ { "name": "", "type": "bool", "value": false }, { "name": "", "type": "bool", "value": false } ], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [ { "name": "_userIndex", "type": "uint256" } ], "name": "getOrderIndex", "outputs": [ { "name": "", "type": "uint256[]", "value": [] }, { "name": "", "type": "uint256", "value": "0" } ], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": false, "inputs": [ { "name": "_menuName", "type": "string" }, { "name": "_menuPrice", "type": "uint256" }, { "name": "_explanation", "type": "string" } ], "name": "addMenu", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": false, "inputs": [ { "name": "_exchangeIndex", "type": "uint256" } ], "name": "confirmExchange", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": false, "inputs": [ { "name": "_restIndex", "type": "uint256" }, { "name": "_title", "type": "string" }, { "name": "_content", "type": "string" } ], "name": "writeReview", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": false, "inputs": [ { "name": "_isStudent", "type": "bool" }, { "name": "_nickname", "type": "uint256" }, { "name": "_name", "type": "string" }, { "name": "_depart_category", "type": "uint256" }, { "name": "_tokenPromise", "type": "uint256" } ], "name": "signUp", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function" } ]
var contractAddress = "0xee8ECC2ca9C665594c175D6dDA94037a1bf160f0";
var web3;


window.addEventListener('load', async () => {
    // Modern dapp browsers...
    if (window.ethereum) {
        window.web3 = new Web3(ethereum);
        try {
            // Request account access if needed
            await ethereum.enable();

            // Acccounts now exposed
            console.log("MetaMask Interface 1");

            ethereum
            .send('eth_accounts')
            .then(accounts => {
                console.log(accounts);
            })

            startApp();

        } catch (error) {
        }
    }
    // Legacy dapp browsers…
    else if (window.web3) {
        window.web3 = new Web3(web3.currentProvider);
        // Acccounts always exposed
        console.log("MetaMask Interface 2");
        console.log(web3);
    }
    // Non-dapp browsers…
    else {
        alert("Please install metamask!!")
        //window.location.href = "https://metamask.io/";
        console.log('Non-Ethereum browser detected. You should consider trying MetaMask!');
    }
});

function myPageSelector() {
    if(sessionStorage.isStudent == "true") location.href="../mypage";
    else{
        location.href="../mypageRestaurant";
    } 
}