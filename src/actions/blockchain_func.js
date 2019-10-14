import TokenABI from './contract.js'
let tokenAddress = '0xDc31Fa19a0706a3f73489A4768634617A1DfBca9';

export const depositToken = async (tokenAddress, amount) => {

    const rootChainAddress = '0x70459e550254b9d3520a56ee95b78ee4f2dbd846'
    const web3 = this.selectedNetwork.web3

    var rootChainContract = new web3.eth.Contract(
        RootContractAbi,
        rootChainAddress.toLowerCase()
    )

    var tokenContract = new web3.eth.Contract(TokenABI, tokenaddress.toLowerCase())

    await tokenContract.methods
        .approve(rootChainAddress, web3.utils.toWei((amount).toString()))
        .send({ from: this.accounts[0].address.toLowerCase() })

    var allowance = await tokenContract.methods
        .allowance(
            this.accounts[0].address.toLowerCase(),
            rootChainAddress.toLowerCase()
        )
        .call()

    await rootChainContract.methods
        .deposit(
            a.address.toLowerCase(),
            this.accounts[0].address.toLowerCase(),
            allowance
        )
        .send({ from: this.accounts[0].address.toLowerCase() })
}

export const transferTokens = async (tokenAddress, to, amount) => {
    var tokenContract = new web3.eth.Contract(TokenABI, tokenAddress.toLowerCase())

    await tokenContract.methods
        .transfer(to, amount)
        .send({ from: this.accounts[0].address.toLowerCase() })
}

const web3 = new Web3("https://testnet.matic.network")

export const getBalanceMatic = async (accountAddress) => {
    const erc20Contract = new web3.eth.Contract(TokenABI, tokenAddress)
    const balance = await erc20Contract.methods.balanceOf(accountAddress).call()
    console.log("balance", balance)
}


export const getBalanceRopsten = async (accountAddress) => {
    const web3 = window.web3 ?
        new Web3(window.web3.currentProvider) :
        new Web3(new Web3("https://api.infura.io/v1/jsonrpc/ropsten")); //TODO insert custom key
    const erc20Contract = web3.eth.contract(TokenABI).at(tokenAddress);
    console.log(erc20Contract);

    const balance = erc20Contract.balanceOf(accountAddress, console.log)
    console.log("balance", balance)
    return balance;
}