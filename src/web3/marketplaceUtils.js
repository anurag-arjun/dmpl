const ethUtils = require('ethereumjs-util')
const sigUtils = require('eth-sig-util')
import Web3 from 'web3'

exports.getSig = function ({
    spender,
    orderId,
    expiration,
    from,
    token1,
    amount1,
    token2,
    amount2
}) {
    const orderData = Buffer.concat([
        ethUtils.toBuffer(orderId),
        ethUtils.toBuffer(token2),
        ethUtils.setLengthLeft(amount2, 32)
    ])
    const orderDataHash = ethUtils.keccak256(orderData)
    return getTransferSig({
        spender: spender,
        data: orderDataHash,
        tokenIdOrAmount: amount1,
        tokenAddress: token1,
        expiration: expiration,
        from : from
    })
}

function getTransferSig({
    spender,
    data,
    tokenAddress,
    tokenIdOrAmount,
    expiration,
    from
}) {
    const typedData = getTransferTypedData({
        tokenAddress,
        tokenIdOrAmount,
        spender,
        data,
        expiration
    })
    // const sig = sigUtils.signTypedData('sdlfjdlskfj', {
    //     data: typedData
    // })

    let method = 'eth_signTypedData'
    const params = [typedData, from];
    console.log('spender', params);
    const web3 = new Web3(window.web3.currentProvider);
    web3.currentProvider.send({
        method,
        params,
        from,
    }, function (err, result) {
        if (err) return console.dir(err)
        if (result.error) {
            alert(result.error.message)
        }
        if (result.error) return console.error(result)
        console.log('PERSONAL SIGNED:' + JSON.stringify(result.result))

        const recovered = sigUtils.recoverTypedSignatureLegacy({ data: msgParams, sig: result.result })
        console.log(recovered, 'recovered');
        
        if (ethUtils.toChecksumAddress(recovered) === ethUtils.toChecksumAddress(from)) {
            alert('Successfully ecRecovered signer as ' + from)
        } else {
            alert('Failed to verify signer when comparing ' + result + ' to ' + from)
        }

    })
    return {
        // sig,
        tokenAddress,
        tokenIdOrAmount,
        spender,
        expiration,
        data: ethUtils.toBuffer(data)
    }
}

function getTransferTypedData({
    tokenAddress,
    spender,
    tokenIdOrAmount,
    data,
    expiration
}) {
    return {
        types: {
            EIP712Domain: [
                { name: "name", type: "string" },
                { name: "version", type: "string" },
                { name: "chainId", type: "uint256" },
                { name: "contract", type: "address" }
            ],
            TokenTransferOrder: [
                { name: "spender", type: "address" },
                { name: "tokenIdOrAmount", type: "uint256" },
                { name: "data", type: "bytes32" },
                { name: "expiration", type: "uint256" }
            ]
        },
        domain: {
            name: "Matic Network",
            version: "1",
            chainId: 15001,
            contract: tokenAddress
        },
        primaryType: "TokenTransferOrder",
        message: {
            spender,
            tokenIdOrAmount,
            data,
            expiration
        }
    }
}