import { NETWORKS } from "../constants/networks"

export const getProviders = () => {
    const network = process.env.REACT_APP_MAINNET ? 'mainnet' : 'testnet'
    return NETWORKS[network].rpc;
}