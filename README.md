# hardhat-oz-upgrades-example
_An example of hardhat contracts upgrades using OpenZeppelin_

## Getting Started 🚀

### Pre-requisites 📋

_You need to have installed nodejs_

[See Hardhat setup enviroment tutorial](https://hardhat.org/tutorial/setting-up-the-environment.html)

### Installation 🔧

_First you need to clone this repository_

```
git clone https://github.com/rafius97/hardhat-oz-upgrades-example/
```

_Make sure you are in the right folder_

```
cd hardhat-oz-upgrades-example/
```

_Next, you must install the dependencies_

```
yarn
```

## Compiling 🗃️

```
yarn compile
```

## Running tests ⚙️

_In order to test using a mainnet fork you must set **ALCHEMY_MAIN_API_KEY**_
_in your .env file_

```
yarn test
```

## Usage 🕹️

### **Case #1: Update the deployed contract**

Imagine your using a testnet and constantly your making some changes to a deployed contract. In that case you can use:

```
yarn deploy-upgrade:rinkeby
```

_In the example, rinkeby network it's used._

You need to make sure in the _3_deploy_upgrade.js_ file the contract factory has to be the same that your making the changes. For example:

```javascript
const contract = await ethers.getContractFactory("Contract");
```

So, instead of create another contract file, just _update_ the same contract your working with.

_This is so useful when you are in the development phase, no need to redeploy the contract again._

### **Case #2: Upgrade the contract**

Imagine you already deployed a contract in a mainnet and you need to make some changes to it:

```
yarn deploy-upgrade:rinkeby
```

_In the example, rinkeby network it's used._

You need to make sure in the _3_deploy_upgrade.js_ file the contract factory has to be the contract file upgraded, usually version is added in the contract name. For example:

```javascript
const contract = await ethers.getContractFactory("ContractV2");
```

_This is so useful when you already have a contract deployed in the mainnet._

**Remember always test before deploy**

### **Extra: Verify the contract on Etherscan**

Verify an upgradeable contract now it's easy using Hardhat, I make a task to handle that, and use the _@nomiclabs/hardhat-etherscan_ plugin for Hardhat:

```
yarn verify-contract:rinkeby --address "0x00..."
```

Note #1: Make sure you set **ETHERSCAN_API_KEY** in your .env file

Note #2: Make sure that the contract address not to be the proxy contract address


## Built with 🛠️

- [Solidity](https://docs.soliditylang.org/en/v0.7.6/)
- [Hardhat](https://hardhat.org/)
- [OpenZeppelin](https://docs.openzeppelin.com/upgrades-plugins/1.x/hardhat-upgrades)

## Author ✒️

- **Rafael Romero** - [rafius97](https://github.com/rafius97)

## License 📄

This project is under the MIT License - look up the file [LICENSE.md](LICENSE.md) for more details.