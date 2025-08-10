import { HardhatRuntimeEnvironment } from "hardhat/types";
import { DeployFunction } from "hardhat-deploy/types";
import { Contract } from "ethers";

/**
 * Deploys a contract named "BaseFlowImplementation" using the deployer account
 * and constructor arguments for USDC token address
 *
 * @param hre HardhatRuntimeEnvironment object.
 */
const deployBaseFlow: DeployFunction = async function (hre: HardhatRuntimeEnvironment) {
  /*
    On localhost, the deployer account is the one that comes with Hardhat, which is already funded.

    When deploying to live networks (e.g `yarn deploy --network sepolia`), the deployer account
    should have sufficient balance to pay for the gas fees for contract creation.

    You can generate a random account with `yarn generate` which will fill DEPLOYER_PRIVATE_KEY
    with a random private key in the .env file (then used on hardhat.config.ts)
    You can run the `yarn account` command to check your balance in every network.
  */
  const { deployer } = await hre.getNamedAccounts();
  const { deploy } = hre.deployments;

  // For localhost/development, you can use a mock USDC address
  // For production, use the actual USDC contract address for the target network
  // Using the deployer address as placeholder for development
  const usdcAddress = process.env.USDC_ADDRESS || deployer;

  await deploy("BaseFlowImplementation", {
    from: deployer,
    // Contract constructor arguments
    args: [usdcAddress],
    log: true,
    // autoMine: can be passed to the deploy function to make the deployment process faster on local networks by
    // automatically mining the contract deployment transaction. There is no effect on live networks.
    autoMine: true,
  });

  // Get the deployed contract to interact with it after deploying.
  const baseFlowContract = await hre.ethers.getContract<Contract>("BaseFlowImplementation", deployer);
  console.log("🚀 BaseFlow deployed! USDC address:", await baseFlowContract.usdc());
};

export default deployBaseFlow;

// Tags are useful if you have multiple deploy files and only want to run one of them.
// e.g. yarn deploy --tags BaseFlow
deployBaseFlow.tags = ["BaseFlow"];