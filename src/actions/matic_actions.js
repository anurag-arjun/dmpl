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

matic.wallet = config.PRIVATE_KEY // prefix with `0x`

export const approveToken = () => {
    const amount = '1000'; // amount in wei

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
        });
};