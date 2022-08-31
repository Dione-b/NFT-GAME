const main = async () => {
    const gameContractFactory = await hre.ethers.getContractFactory("MyEpicGame");
    const characterNames = ["Naruto Usumaki", "Sasuke Uchiha", "Itachi Uchiha"];
    const characterImageURIs = [
      "https://imgur.com/ic7LVxd.png",
      "https://imgur.com/JrMUhv2.png",
      "https://imgur.com/dVlqUJc.png",
    ];
    const characterHp = [100, 200, 300];
    const characterAttackDmg = [100, 50, 25];

    const bossName = "Capitão Nascimento";
    const bossImageURI = "https://i.imgur.com/yWpKMDt.png";
    const bossHp = 20000;
    const bossAttackDamage = 50;

    const gameContract = await gameContractFactory.deploy(
      characterNames, 
      characterImageURIs, 
      characterHp, 
      characterAttackDmg, 
      bossName, 
      bossImageURI, 
      bossHp, 
      bossAttackDamage
    );
  
    
    await gameContract.deployed();
    console.log("Contract deployed to:", gameContract.address);

    let txn;
    // We only have three characters.
    // an NFT w/ the character at index 2 of our array.
    txn = await gameContract.mintCharacterNFT(2);
    await txn.wait();

    txn = await gameContract.attackBoss();
    await txn.wait();

    txn = await gameContract.attackBoss();
    await txn.wait();

    console.log("Done!");
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