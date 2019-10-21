import Matic from 'maticjs';
import config from './matic-config';
const token = config.ROPSTEN_TEST_TOKEN // test token address
const from = config.FROM_ADDRESS // from address

// Create object of Matic
const matic = new Matic({
    maticProvider: config.MATIC_PROVIDER,
    parentProvider: config.PARENT_PROVIDER,
    rootChainAddress: config.ROOTCHAIN_ADDRESS,
    syncerUrl: config.SYNCER_URL,
    watcherUrl: config.WATCHER_URL,
})

// matic.wallet = `0x${config.PRIVATE_KEY}` // prefix with `0x`

export const approveToken = () => {
    const amount = '1000000000000000000'; // amount in wei
    console.log('called');

    // Approve token
    matic
        .approveERC20TokensForDeposit(token, amount, {
            from,
            onTransactionHash: (hash) => {
                // action on Transaction success
                console.log(hash); // eslint-disable-line
            },
        })
        .then(() => {
            // Deposit tokens
            matic.depositERC20Tokens(token, from, amount, {
                from,
                onTransactionHash: (hash) => {
                    // action on Transaction success
                    console.log(hash); // eslint-disable-line
                },
            });
        })
        .catch(console.error);
};

export const transferToken = (recipient) => {
    const token = config.MATIC_TEST_TOKEN // test token address
    const amount = '1000000000000000000' // amount in wei

    // Send Tokens
    matic.transferTokens(token, recipient, amount, {
        from,
        // parent: true, // For token transfer on Main network (false for Matic Network)
        onTransactionHash: (hash) => {
            // action on Transaction success
            console.log(hash) // eslint-disable-line
        },
    })
}