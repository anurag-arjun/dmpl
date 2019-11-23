import TokenABI from './contractABI'
import Web3 from 'web3'
import RootContractABI from './RootContractABI';
// let tokenAddress = '0x70459e550254b9d3520a56ee95b78ee4f2dbd846';
// let rootChainAddress = '0x60e2b19b9a87a3f37827f2c8c8306be718a5f9b4'
// let account = '0x699E2d28b6AdbEC6C3ee069a16D79ed7cB64083D';

export const authorizeToken = async (account, tokenAddress, amount, activity) => {
    
    const rootChainAddress = '0x60e2b19b9a87a3f37827f2c8c8306be718a5f9b4'
    const web3 = window.web3 ?
        new Web3(window.web3.currentProvider) :
        new Web3(new Web3("https://ropsten.infura.io/v3/70645f042c3a409599c60f96f6dd9fbc")); //TODO insert custom key

    // var tokenContract = web3.eth.contract(TokenABI).at(tokenAddress.toLowerCase())
    var tokenContract = new web3.eth.Contract(TokenABI, tokenAddress.toLowerCase());
    console.log('here', account);
    
    activity();
    const hash1 = await tokenContract.methods.approve(rootChainAddress, amount).send({
        from : account.toLowerCase(),
        gasPrice: 0
    })

    const hash = await tokenContract.methods.allowance(account, rootChainAddress.toLowerCase()).call()
    console.log(hash1, hash);
    
    return hash1.transactionHash;
}

export const depositToken = async (account, tokenAddress, amount, activity) => {
    const rootChainAddress = '0x60e2b19b9a87a3f37827f2c8c8306be718a5f9b4'
    const web3 = window.web3 ?
        new Web3(window.web3.currentProvider) :
        new Web3(new Web3("https://ropsten.infura.io/v3/70645f042c3a409599c60f96f6dd9fbc")); //TODO insert custom key

    var rootChainContract = new web3.eth.Contract(RootContractABI, rootChainAddress.toLowerCase())
    activity();
    const deposite = await rootChainContract.methods.deposit( tokenAddress.toLowerCase(), account.toLowerCase(), amount)
        .send({
            from : account.toLowerCase(),
            gasPrice : 0
        });
    console.log(deposite, 'deposite');
    
    return deposite.transactionHash;
}

export const transferTokens = async (tokenAddress, to, amount) => {
    var tokenContract = new web3.eth.Contract(TokenABI, tokenAddress.toLowerCase())

    await tokenContract.methods
        .transfer(to, amount)
        .send({ from: this.accounts[0].address.toLowerCase() })
}

export const getBalanceMatic = async (accountAddress, tokenAddress) => {
    const web3 = window.web3 ?
        new Web3(window.web3.currentProvider) :
        new Web3(new Web3("https://testnet2.matic.network")); //TODO insert custom key
    const erc20Contract = new web3.eth.Contract(TokenABI, tokenAddress);
    const balance = await erc20Contract.methods.balanceOf(accountAddress).call()
    return balance;
}


export const getBalanceRopsten = async (accountAddress, tokenAddress) => {
    const web3 = window.web3 ?
        new Web3(window.web3.currentProvider) :
        new Web3(new Web3("https://ropsten.infura.io/v3/70645f042c3a409599c60f96f6dd9fbc")); //TODO insert custom key

    const erc20Contract = new web3.eth.Contract(TokenABI, tokenAddress);
    const balance = await erc20Contract.methods.balanceOf(accountAddress).call()
    return balance;
}