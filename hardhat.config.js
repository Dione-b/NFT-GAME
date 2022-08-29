require("@nomiclabs/hardhat-waffle");

module.exports = {
  solidity: "0.8.4",
  networks: {
    goerli: {
      url: "SEU_URL_DA_API_ALCHEMY",
      accounts: ["SUA_KEY_PRIVADA_DA_CONTA_GOERLI"],
    },
  },
};
