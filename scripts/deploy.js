const main = async () => {
    const gameContractFactory = await hre.ethers.getContractFactory("MyEpicGame");
    const gameContract = await gameContractFactory.deploy(
      ["Anitta", "Ronaldinho Gaúcho", "Zeca Pagodinho"],
          [
            "https://i.imgur.com/gC5qXsl.png",
            "https://i.imgur.com/0PvxtwP.png",
            "https://i.imgur.com/Pj8lHpM.png",
          ],
      [100, 200, 300],
      [100, 50, 25]
    );
    await gameContract.deployed();
    console.log("Contrato implantado no endereço:", gameContract.address)
  
    let txn;
    txn = await gameContract.mintCharacterNFT(0);
    await txn.wait();
    console.log("Mintou NFT #1");
  
    txn = await gameContract.mintCharacterNFT(1);
    await txn.wait();
    console.log("Mintou NFT #2");
  
    txn = await gameContract.mintCharacterNFT(2);
    await txn.wait();
    console.log("Mintou NFT #3");
  
    txn = await gameContract.mintCharacterNFT(1);
    await txn.wait();
    console.log("Minted NFT #4");
  
    console.log("Fim do deploy e mint!");
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