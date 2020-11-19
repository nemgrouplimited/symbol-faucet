import * as helper from './helper';
const {
    DEFAULT_NODE,
    DEFAULT_NODE_CLIENT,
    NATIVE_CURRENCY_NAME,
    NATIVE_CURRENCY_ID,
    FAUCET_PRIVATE_KEY,
    NATIVE_CURRENCY_OUT_MAX,
    NATIVE_CURRENCY_OUT_MIN,
    MAX_FEE,
    ENOUGH_BALANCE,
    MAX_UNCONFIRMED,
    BLACKLIST_MOSAIC_ID,
    EXPLORER_URL,
} = process.env;

export interface IConfig {
    DEFAULT_NODE: string;
    DEFAULT_NODE_CLIENT: string;
    NATIVE_CURRENCY_NAME: string;
    NATIVE_CURRENCY_ID: string;
    NATIVE_CURRENCY_OUT_MIN: number;
    NATIVE_CURRENCY_OUT_MAX: number;
    MAX_FEE: number;
    MAX_UNCONFIRMED: number;
    MAX_BALANCE: number;
    FAUCET_PRIVATE_KEY: string;
    BLACKLIST_MOSAICIDS: string[];
    EXPLORER_URL: string;
}

export const Config: IConfig = {
    DEFAULT_NODE: DEFAULT_NODE || 'http://localhost:3000',
    DEFAULT_NODE_CLIENT: DEFAULT_NODE_CLIENT || DEFAULT_NODE || 'http://127.0.0.1:3000',
    NATIVE_CURRENCY_NAME: NATIVE_CURRENCY_NAME || 'cat.currency',
    NATIVE_CURRENCY_ID: NATIVE_CURRENCY_ID || '06CCF23D2F3204EE',
    FAUCET_PRIVATE_KEY: FAUCET_PRIVATE_KEY || '9C8B1DEFDB700E8DA2834346E613E98D4C610093892B7E1AA39288C93709A462',
    NATIVE_CURRENCY_OUT_MIN: parseInt(NATIVE_CURRENCY_OUT_MIN || '') || 100000000,
    NATIVE_CURRENCY_OUT_MAX: parseInt(NATIVE_CURRENCY_OUT_MAX || '') || 500000000,
    MAX_FEE: parseFloat(MAX_FEE || '') || 5000000,
    MAX_UNCONFIRMED: parseInt(MAX_UNCONFIRMED || '') || 99,
    MAX_BALANCE: parseInt(ENOUGH_BALANCE || '') || 100000000000,
    BLACKLIST_MOSAICIDS: helper.stringToArray(BLACKLIST_MOSAIC_ID),
    EXPLORER_URL: EXPLORER_URL || 'http://localhost:80',
};
