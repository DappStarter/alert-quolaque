require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gesture glimpse frame tribe strike rival sad method imitate private equal gentle'; 
let testAccounts = [
"0x9c58e0656d9f56146cc63960c8c2ebdc8732364a4a55baed5929b9f80e7dc927",
"0x47875b4fd1da65fc9ca5d8b9c13cb7084c70b1a87abb6f68fa2ac27b8fc2f106",
"0x10176f947edc1c4aa4a8515eac4c1863b83e8fe34f1a4b4d18fd617623654c4b",
"0x9ea222aee88750c8b4e99aa2c632ff71a80e68edf3a5ddd5ebb9d72a6ef75073",
"0x3141b47843440886934b08869b95360c1eefe9f232be10836f825a20138743fb",
"0x1df1e19b3a1a5f100709a313380cca1acdf01fb0aa66fdd5e5bb384345456b11",
"0xb25f73195845c71aae21012de404af6a0075df2f4ce1c862dd62215508695a34",
"0x8f1c614b94e7a41c4628eb8a1585941402f371c84ab816a2cbd1c53b2cb9de8b",
"0xea816b7dfe86f4c731e10e364cdfd0ad2e166f9cd066a3d9e1212e0922f84492",
"0xbdf7cf307e242d79ea70610746d323ec910235d9d2cd1f8572b3ede07f2f9828"
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
