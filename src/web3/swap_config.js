
const web3 = window.web3 ?
    new Web3(window.web3.currentProvider) :
    new Web3(new Web3("https://ropsten.infura.io/v3/70645f042c3a409599c60f96f6dd9fbc")); //TODO insert custom key

module.exports = {
    provider: web3,
    erc20: '0xc82c13004c06e4c627cf2518612a55ce7a3db699',
    erc721: '0x9f289a264b6db56d69ad53f363d06326b984e637',
    marketplace: '0xc82c13004c06e4c627cf2518612a55ce7a3db699',

    amount: 1,
    tokenid: 1,
    orderId: '0x468fc9c005382579139846222b7b0aebc9182ba073b2455938a86d9753bfb078',
    expiration: 0
}