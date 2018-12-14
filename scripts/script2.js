/*
Script to test web3 from javascript
*/

// Add the web3 node module
var Web3 = require('web3');

// Show web3 where it needs to look for the Ethereum node.
web3 = new Web3(new Web3.providers.HttpProvider('https://ropsten.infura.io/v3/836f2c3dd85b40ada9b4b0e845581ce6'));

// The address we want to search by.
var addr = '0x08d6584107e3ee0decd5025fbb5cf197c459bc1c';

// Show the Hash in the console.
console.log('Events by Address: ' + addr);

// Define the contract ABI
var abi = [
	{
		"constant": true,
		"inputs": [],
		"name": "getBalance",
		"outputs": [
			{
				"name": "balanceWei",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "_amountWei",
				"type": "uint256"
			}
		],
		"name": "withdrawFunds",
		"outputs": [
			{
				"name": "success",
				"type": "bool"
			}
		],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "_vaultAddress",
				"type": "address"
			}
		],
		"name": "getIsActive",
		"outputs": [
			{
				"name": "isActive",
				"type": "bool"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [],
		"name": "updateFallbackDeposit",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "getFallbackAddress",
		"outputs": [
			{
				"name": "fallbackAddress",
				"type": "address"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "getNewFallbackDepositPeriod",
		"outputs": [
			{
				"name": "newFallbackDepositPeriodSec",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "getNewAllowancesEffectuation",
		"outputs": [
			{
				"name": "newAllowancesEffectuationSec",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [],
		"name": "invokeFallback",
		"outputs": [
			{
				"name": "success",
				"type": "bool"
			}
		],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "getFallbackDeposit",
		"outputs": [
			{
				"name": "fallbackDepositWei",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "getAllowancePeriod",
		"outputs": [
			{
				"name": "allowancePeriodSec",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "getCumulativeAllowance",
		"outputs": [
			{
				"name": "cumulativeAllowanceWei",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [],
		"name": "updateAllowances",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "getFreeAllowance",
		"outputs": [
			{
				"name": "freeAllowanceWei",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "_amountWei",
				"type": "uint256"
			},
			{
				"name": "_beneficiaryAddress",
				"type": "address"
			}
		],
		"name": "withdrawFunds",
		"outputs": [
			{
				"name": "success",
				"type": "bool"
			}
		],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "getNewFallbackDepositEffectuation",
		"outputs": [
			{
				"name": "newFallbackDepositEffectuationSec",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "_beneficiaryAddress",
				"type": "address"
			}
		],
		"name": "depositFunds",
		"outputs": [
			{
				"name": "success",
				"type": "bool"
			}
		],
		"payable": true,
		"stateMutability": "payable",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "_newCumulativeAllowanceWei",
				"type": "uint256"
			},
			{
				"name": "_newAllowancePeriodSec",
				"type": "uint256"
			}
		],
		"name": "changeAllowances",
		"outputs": [
			{
				"name": "success",
				"type": "bool"
			}
		],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "getFallbackDepositPeriod",
		"outputs": [
			{
				"name": "fallbackDepositPeriodSec",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "getAllowanceExpiration",
		"outputs": [
			{
				"name": "allowanceExpirationSec",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "getNewFallbackDeposit",
		"outputs": [
			{
				"name": "newFallbackDepositWei",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "_vaultAddress",
				"type": "address"
			}
		],
		"name": "invokeFallback",
		"outputs": [
			{
				"name": "success",
				"type": "bool"
			}
		],
		"payable": true,
		"stateMutability": "payable",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "getNewAllowancePeriod",
		"outputs": [
			{
				"name": "newAllowancePeriodSec",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "_newFallbackDepositWei",
				"type": "uint256"
			}
		],
		"name": "changeFallbackDeposit",
		"outputs": [
			{
				"name": "success",
				"type": "bool"
			}
		],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [],
		"name": "depositFunds",
		"outputs": [
			{
				"name": "success",
				"type": "bool"
			}
		],
		"payable": true,
		"stateMutability": "payable",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "_fallbackAddress",
				"type": "address"
			},
			{
				"name": "_fallbackDepositWei",
				"type": "uint256"
			},
			{
				"name": "_fallbackDepositPeriodSec",
				"type": "uint256"
			},
			{
				"name": "_cumulativeAllowanceWei",
				"type": "uint256"
			},
			{
				"name": "_allowancePeriodSec",
				"type": "uint256"
			}
		],
		"name": "activateVault",
		"outputs": [
			{
				"name": "success",
				"type": "bool"
			}
		],
		"payable": true,
		"stateMutability": "payable",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "getVaultBalance",
		"outputs": [
			{
				"name": "vaultBalance",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [],
		"name": "donate",
		"outputs": [
			{
				"name": "success",
				"type": "bool"
			}
		],
		"payable": true,
		"stateMutability": "payable",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "_amountWei",
				"type": "uint256"
			},
			{
				"name": "_beneficiaryAddress",
				"type": "address"
			}
		],
		"name": "transferFunds",
		"outputs": [
			{
				"name": "success",
				"type": "bool"
			}
		],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "getNewCumulativeAllowance",
		"outputs": [
			{
				"name": "newCumulativeAllowanceWei",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "getIsActive",
		"outputs": [
			{
				"name": "isActive",
				"type": "bool"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"name": "_fallbackAddress",
				"type": "address"
			},
			{
				"name": "_fallbackDepositWei",
				"type": "uint256"
			},
			{
				"name": "_fallbackDepositPeriodSec",
				"type": "uint256"
			},
			{
				"name": "_cumulativeAllowanceWei",
				"type": "uint256"
			},
			{
				"name": "_allowancePeriodSec",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "constructor"
	},
	{
		"payable": true,
		"stateMutability": "payable",
		"type": "fallback"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"name": "warningMsg",
				"type": "string"
			},
			{
				"indexed": false,
				"name": "vaultAddress",
				"type": "address"
			},
			{
				"indexed": false,
				"name": "incident",
				"type": "string"
			},
			{
				"indexed": false,
				"name": "effectuation",
				"type": "uint256"
			}
		],
		"name": "Warning",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"name": "notificationMsg",
				"type": "string"
			}
		],
		"name": "Notification",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"name": "notificationMsg",
				"type": "string"
			},
			{
				"indexed": false,
				"name": "vaultAddress",
				"type": "address"
			}
		],
		"name": "Notification",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"name": "notificationMsg",
				"type": "string"
			},
			{
				"indexed": false,
				"name": "vaultAddress",
				"type": "address"
			},
			{
				"indexed": false,
				"name": "incident",
				"type": "string"
			}
		],
		"name": "Notification",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"name": "notificationMsg",
				"type": "string"
			},
			{
				"indexed": false,
				"name": "vaultAddress",
				"type": "address"
			},
			{
				"indexed": false,
				"name": "uint1",
				"type": "uint256"
			}
		],
		"name": "Notification",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"name": "notificationMsg",
				"type": "string"
			},
			{
				"indexed": false,
				"name": "vaultAddress",
				"type": "address"
			},
			{
				"indexed": false,
				"name": "uint1",
				"type": "uint256"
			},
			{
				"indexed": false,
				"name": "uint2",
				"type": "uint256"
			}
		],
		"name": "Notification",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"name": "notificationMsg",
				"type": "string"
			},
			{
				"indexed": false,
				"name": "addressSender",
				"type": "address"
			},
			{
				"indexed": false,
				"name": "vaultAddress",
				"type": "address"
			},
			{
				"indexed": false,
				"name": "uint1",
				"type": "uint256"
			},
			{
				"indexed": false,
				"name": "uint2",
				"type": "uint256"
			}
		],
		"name": "Notification",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"name": "notificationMsg",
				"type": "string"
			},
			{
				"indexed": false,
				"name": "addressSender",
				"type": "address"
			},
			{
				"indexed": false,
				"name": "addressBeneficiary",
				"type": "address"
			},
			{
				"indexed": false,
				"name": "amountWei",
				"type": "uint256"
			},
			{
				"indexed": false,
				"name": "newBalanceSender",
				"type": "uint256"
			},
			{
				"indexed": false,
				"name": "newBalanceWeiBeneficiary",
				"type": "uint256"
			}
		],
		"name": "Notification",
		"type": "event"
	}
]

// Define the contract ABI and Address
var contract = new web3.eth.Contract(ABI=abi, Address=addr);

var sender = web3.Ethereum.accounts[0];
