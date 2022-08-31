require("@nomiclabs/hardhat-waffle");

module.exports = {
  solidity: "0.8.4",
  networks: {
    goerli: {
      url: "https://eth-goerli.g.alchemy.com/v2/iweBLF_SgA4uLPseBOSiwXXF-_NjmEnF",
      accounts: ["4b7b5323a9d9bcbde6f5f0885021e0ca85dcd4e119b80fe43d3fdc82d146b24f"],
    },
  },
};
