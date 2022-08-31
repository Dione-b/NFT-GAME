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
    console.log("Contrato implantado no endereço:", gameContract.address)
  
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