require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'half climb force trip maple note meadow cluster include clinic only search'; 
let testAccounts = [
"0xd529545153eeea67ccee57abf8d756e6f25868b59d66a19a5e46e83387832cea",
"0x275a17bb26cb63ad91495d9778d4f9584e0c35642d1932b02ed71659bcdcd12a",
"0x80b11c261a83a3c2a0df56851462930006cea90c8af8e1714fe1e1c38f4631ef",
"0xd0e97a2aa767daac330ba70290c1fc254b9c646f7e1b5e196503cacb1064013e",
"0x4a49197d8eb11b5191060edf416ca7e3dd67b0b6c211b8db97001df0583e9225",
"0x97e707c7c850ba7f926b4dc78661971992f6d20f5d07049839b62f886e1c74ec",
"0x0648cb3c98f457d430a73470e8dcedba34ad6a9b86b0eb1dd4b6417fc4fc46c7",
"0x9ca9d9dc6e46c2f253118f1a548363a6a3488af89752f4f37b17d2b9d8ed63c8",
"0xeec785fd1aa134285b2a469f2454052d2b7e7ef15b8a12752ee578f05fbcad2e",
"0x8a1532b27ce74f1f697192d7a961405e60aab2a5160ef63953d550c318d4b0d1"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};
