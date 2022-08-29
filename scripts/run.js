const main = async () => {
    const gameContractFactory = await hre.ethers.getContractFactory("MyEpicGame");
    const gameContract = await gameContractFactory.deploy(
      ["Anitta", "Ronaldinho Gaúcho", "Zeca Pagodinho"],
          [
              "https://i.imgur.com/gC5qXsl.png",
              "https://i.imgur.com/0PvxtwP.png",
              "https://i.imgur.com/Pj8lHpM.png",
          ],
      [100, 200, 300], // HP values
      [100, 50, 25] // Attack damage values
    );
    await gameContract.deployed();
    console.log("Contrato implantado no endereço:", gameContract.address);

    let txn;
    // Só temos três personagens.
    // Uma NFT com personagem no index 2 da nossa array.
    txn = await gameContract.mintCharacterNFT(2);
    await txn.wait();

    // Pega o valor da URI da NFT
    let returnedTokenUri = await gameContract.tokenURI(1);
    console.log("Token URI:", returnedTokenUri);
  };
  
  const runMain = async () => {
    try {
      await main();
      process.exit(0);
    } catch (error) {
      console.log(error);
      process.exit(1);
    }
  };
  
  runMain();