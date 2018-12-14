

// The window listener
window.addEventListener('load', function() {

  // Checking if Web3 has been injected by the browser (Mist/MetaMask)
  if (typeof web3 !== 'undefined') {
    // Use Mist/MetaMask's provider
    web3js = new Web3(web3.currentProvider);
  } else {
    //console.log('No web3? You should consider trying MetaMask!')
    // fallback - use your fallback strategy (local node / hosted node + in-dapp id mgmt / fail
    web3js = new Web3(new Web3.providers.HttpProvider('https://ropsten.infura.io/v3/836f2c3dd85b40ada9b4b0e845581ce6'));
  }

  // Now you can start your app & access web3 freely:
  web3js.version.getNetwork((err, netId) => {
    switch (netId) {
      case "1":
        console.log('This is mainnet')
        break
      case "2":
        console.log('This is the deprecated Morden test network.')
        break
      case "3":
        console.log('This is the ropsten test network.')
        break
      case "4":
        console.log('This is the Rinkeby test network.')
        break
      case "42":
        console.log('This is the Kovan test network.')
        break
      default:
        console.log('This is an unknown network.')
    }
  })

  var accounts = web3js.eth.accounts;
  if (accounts.length == 0) {
    writeAccount('You are not logged in. Try installing <a href="https://metamask.io/" target="_blank">MetaMask.</a>');
  } else {
    writeAccount('Account: ' + accounts[0]);
  }

  // Define a contract (just hacking now)
  const contract = web3js.eth.contract([{"constant":true,"inputs":[],"name":"getBalance","outputs":[{"name":"balanceWei","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_amountWei","type":"uint256"}],"name":"withdrawFunds","outputs":[{"name":"success","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"_vaultAddress","type":"address"}],"name":"getIsActive","outputs":[{"name":"isActive","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[],"name":"updateFallbackDeposit","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"getFallbackAddress","outputs":[{"name":"fallbackAddress","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"getNewFallbackDepositPeriod","outputs":[{"name":"newFallbackDepositPeriodSec","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"getNewAllowancesEffectuation","outputs":[{"name":"newAllowancesEffectuationSec","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[],"name":"invokeFallback","outputs":[{"name":"success","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"getFallbackDeposit","outputs":[{"name":"fallbackDepositWei","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"getAllowancePeriod","outputs":[{"name":"allowancePeriodSec","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"getCumulativeAllowance","outputs":[{"name":"cumulativeAllowanceWei","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[],"name":"updateAllowances","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"getFreeAllowance","outputs":[{"name":"freeAllowanceWei","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_amountWei","type":"uint256"},{"name":"_beneficiaryAddress","type":"address"}],"name":"withdrawFunds","outputs":[{"name":"success","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"getNewFallbackDepositEffectuation","outputs":[{"name":"newFallbackDepositEffectuationSec","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_beneficiaryAddress","type":"address"}],"name":"depositFunds","outputs":[{"name":"success","type":"bool"}],"payable":true,"stateMutability":"payable","type":"function"},{"constant":false,"inputs":[{"name":"_newCumulativeAllowanceWei","type":"uint256"},{"name":"_newAllowancePeriodSec","type":"uint256"}],"name":"changeAllowances","outputs":[{"name":"success","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"getFallbackDepositPeriod","outputs":[{"name":"fallbackDepositPeriodSec","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"getAllowanceExpiration","outputs":[{"name":"allowanceExpirationSec","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"getNewFallbackDeposit","outputs":[{"name":"newFallbackDepositWei","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_vaultAddress","type":"address"}],"name":"invokeFallback","outputs":[{"name":"success","type":"bool"}],"payable":true,"stateMutability":"payable","type":"function"},{"constant":true,"inputs":[],"name":"getNewAllowancePeriod","outputs":[{"name":"newAllowancePeriodSec","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_newFallbackDepositWei","type":"uint256"}],"name":"changeFallbackDeposit","outputs":[{"name":"success","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[],"name":"depositFunds","outputs":[{"name":"success","type":"bool"}],"payable":true,"stateMutability":"payable","type":"function"},{"constant":false,"inputs":[{"name":"_fallbackAddress","type":"address"},{"name":"_fallbackDepositWei","type":"uint256"},{"name":"_fallbackDepositPeriodSec","type":"uint256"},{"name":"_cumulativeAllowanceWei","type":"uint256"},{"name":"_allowancePeriodSec","type":"uint256"}],"name":"activateVault","outputs":[{"name":"success","type":"bool"}],"payable":true,"stateMutability":"payable","type":"function"},{"constant":true,"inputs":[],"name":"getVaultBalance","outputs":[{"name":"vaultBalance","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[],"name":"donate","outputs":[{"name":"success","type":"bool"}],"payable":true,"stateMutability":"payable","type":"function"},{"constant":false,"inputs":[{"name":"_amountWei","type":"uint256"},{"name":"_beneficiaryAddress","type":"address"}],"name":"transferFunds","outputs":[{"name":"success","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"getNewCumulativeAllowance","outputs":[{"name":"newCumulativeAllowanceWei","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"getIsActive","outputs":[{"name":"isActive","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"inputs":[{"name":"_fallbackAddress","type":"address"},{"name":"_fallbackDepositWei","type":"uint256"},{"name":"_fallbackDepositPeriodSec","type":"uint256"},{"name":"_cumulativeAllowanceWei","type":"uint256"},{"name":"_allowancePeriodSec","type":"uint256"}],"payable":false,"stateMutability":"nonpayable","type":"constructor"},{"payable":true,"stateMutability":"payable","type":"fallback"},{"anonymous":false,"inputs":[{"indexed":false,"name":"warningMsg","type":"string"},{"indexed":false,"name":"vaultAddress","type":"address"},{"indexed":false,"name":"incident","type":"string"},{"indexed":false,"name":"effectuation","type":"uint256"}],"name":"Warning","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"notificationMsg","type":"string"}],"name":"Notification","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"notificationMsg","type":"string"},{"indexed":false,"name":"vaultAddress","type":"address"}],"name":"Notification","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"notificationMsg","type":"string"},{"indexed":false,"name":"vaultAddress","type":"address"},{"indexed":false,"name":"incident","type":"string"}],"name":"Notification","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"notificationMsg","type":"string"},{"indexed":false,"name":"vaultAddress","type":"address"},{"indexed":false,"name":"uint1","type":"uint256"}],"name":"Notification","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"notificationMsg","type":"string"},{"indexed":false,"name":"vaultAddress","type":"address"},{"indexed":false,"name":"uint1","type":"uint256"},{"indexed":false,"name":"uint2","type":"uint256"}],"name":"Notification","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"notificationMsg","type":"string"},{"indexed":false,"name":"addressSender","type":"address"},{"indexed":false,"name":"vaultAddress","type":"address"},{"indexed":false,"name":"uint1","type":"uint256"},{"indexed":false,"name":"uint2","type":"uint256"}],"name":"Notification","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"notificationMsg","type":"string"},{"indexed":false,"name":"addressSender","type":"address"},{"indexed":false,"name":"addressBeneficiary","type":"address"},{"indexed":false,"name":"amountWei","type":"uint256"},{"indexed":false,"name":"newBalanceSender","type":"uint256"},{"indexed":false,"name":"newBalanceWeiBeneficiary","type":"uint256"}],"name":"Notification","type":"event"}]);
  const contractInstance = contract.at("0x08D6584107e3eE0dECD5025fbb5Cf197c459bC1C");

  if (accounts.length != 0) {
    // Get the current network
    web3js.version.getNetwork((err, netId) => {
      switch (netId) {
        case "1":
          network = "mainnet";
          break
        case "3":
          network = "ropsten";
          break
        default:
          network = "Unknown";
      }
    writeNetwork(network);
    });
    // Get bank balance
    contractInstance.getBalance((error, result) => {
      balanceEther = web3js.fromWei(result, "ether");
      writeBalance(balanceEther, "eth");
    });
    // Get wallet balance
    web3js.eth.getBalance(accounts[0], (error, result) => {
      balanceEther = web3js.fromWei(result, "ether");
      writeWalletBalance(balanceEther, "eth");
    })
  }
});

function writeNetwork(network) {
  document.getElementById("p-network-msg").innerHTML = "Network: " + network;
}

function writeAccount(msg) {
  document.getElementById("p-account-msg").innerHTML = msg;
}

function writeBalance(balance, unit) {
  document.getElementById("p-balance-msg").innerHTML = "Bank balance: " + balance + " " + unit;
}

function writeWalletBalance(balance, unit) {
  document.getElementById("p-wallet-balance-msg").innerHTML = "Wallet balance: " + balance + " " + unit;
}

function getContract() {
  // Checking if Web3 has been injected by the browser (Mist/MetaMask)
  if (typeof web3 !== 'undefined') {
    // Use Mist/MetaMask's provider
    web3js = new Web3(web3.currentProvider);
  } else {
    //console.log('No web3? You should consider trying MetaMask!')
    // fallback - use your fallback strategy (local node / hosted node + in-dapp id mgmt / fail
    web3js = new Web3(new Web3.providers.HttpProvider('https://ropsten.infura.io/v3/836f2c3dd85b40ada9b4b0e845581ce6'));
  }

  // Now you can start your app & access web3 freely:
  web3js.version.getNetwork((err, netId) => {
    switch (netId) {
      case "1":
        console.log('This is mainnet')
        break
      case "2":
        console.log('This is the deprecated Morden test network.')
        break
      case "3":
        console.log('This is the ropsten test network.')
        break
      case "4":
        console.log('This is the Rinkeby test network.')
        break
      case "42":
        console.log('This is the Kovan test network.')
        break
      default:
        console.log('This is an unknown network.')
    }
  })

  var accounts = web3js.eth.accounts;
  if (accounts.length == 0) {
    writeAccount('You are not logged in. Try installing <a href="https://metamask.io/" target="_blank">MetaMask.</a>');
  } else {
    writeAccount('Account: ' + accounts[0]);
  }

  // Define a contract (just hacking now)
  const contract = web3js.eth.contract([{"constant":true,"inputs":[],"name":"getBalance","outputs":[{"name":"balanceWei","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_amountWei","type":"uint256"}],"name":"withdrawFunds","outputs":[{"name":"success","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"_vaultAddress","type":"address"}],"name":"getIsActive","outputs":[{"name":"isActive","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[],"name":"updateFallbackDeposit","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"getFallbackAddress","outputs":[{"name":"fallbackAddress","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"getNewFallbackDepositPeriod","outputs":[{"name":"newFallbackDepositPeriodSec","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"getNewAllowancesEffectuation","outputs":[{"name":"newAllowancesEffectuationSec","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[],"name":"invokeFallback","outputs":[{"name":"success","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"getFallbackDeposit","outputs":[{"name":"fallbackDepositWei","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"getAllowancePeriod","outputs":[{"name":"allowancePeriodSec","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"getCumulativeAllowance","outputs":[{"name":"cumulativeAllowanceWei","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[],"name":"updateAllowances","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"getFreeAllowance","outputs":[{"name":"freeAllowanceWei","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_amountWei","type":"uint256"},{"name":"_beneficiaryAddress","type":"address"}],"name":"withdrawFunds","outputs":[{"name":"success","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"getNewFallbackDepositEffectuation","outputs":[{"name":"newFallbackDepositEffectuationSec","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_beneficiaryAddress","type":"address"}],"name":"depositFunds","outputs":[{"name":"success","type":"bool"}],"payable":true,"stateMutability":"payable","type":"function"},{"constant":false,"inputs":[{"name":"_newCumulativeAllowanceWei","type":"uint256"},{"name":"_newAllowancePeriodSec","type":"uint256"}],"name":"changeAllowances","outputs":[{"name":"success","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"getFallbackDepositPeriod","outputs":[{"name":"fallbackDepositPeriodSec","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"getAllowanceExpiration","outputs":[{"name":"allowanceExpirationSec","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"getNewFallbackDeposit","outputs":[{"name":"newFallbackDepositWei","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_vaultAddress","type":"address"}],"name":"invokeFallback","outputs":[{"name":"success","type":"bool"}],"payable":true,"stateMutability":"payable","type":"function"},{"constant":true,"inputs":[],"name":"getNewAllowancePeriod","outputs":[{"name":"newAllowancePeriodSec","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_newFallbackDepositWei","type":"uint256"}],"name":"changeFallbackDeposit","outputs":[{"name":"success","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[],"name":"depositFunds","outputs":[{"name":"success","type":"bool"}],"payable":true,"stateMutability":"payable","type":"function"},{"constant":false,"inputs":[{"name":"_fallbackAddress","type":"address"},{"name":"_fallbackDepositWei","type":"uint256"},{"name":"_fallbackDepositPeriodSec","type":"uint256"},{"name":"_cumulativeAllowanceWei","type":"uint256"},{"name":"_allowancePeriodSec","type":"uint256"}],"name":"activateVault","outputs":[{"name":"success","type":"bool"}],"payable":true,"stateMutability":"payable","type":"function"},{"constant":true,"inputs":[],"name":"getVaultBalance","outputs":[{"name":"vaultBalance","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[],"name":"donate","outputs":[{"name":"success","type":"bool"}],"payable":true,"stateMutability":"payable","type":"function"},{"constant":false,"inputs":[{"name":"_amountWei","type":"uint256"},{"name":"_beneficiaryAddress","type":"address"}],"name":"transferFunds","outputs":[{"name":"success","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"getNewCumulativeAllowance","outputs":[{"name":"newCumulativeAllowanceWei","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"getIsActive","outputs":[{"name":"isActive","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"inputs":[{"name":"_fallbackAddress","type":"address"},{"name":"_fallbackDepositWei","type":"uint256"},{"name":"_fallbackDepositPeriodSec","type":"uint256"},{"name":"_cumulativeAllowanceWei","type":"uint256"},{"name":"_allowancePeriodSec","type":"uint256"}],"payable":false,"stateMutability":"nonpayable","type":"constructor"},{"payable":true,"stateMutability":"payable","type":"fallback"},{"anonymous":false,"inputs":[{"indexed":false,"name":"warningMsg","type":"string"},{"indexed":false,"name":"vaultAddress","type":"address"},{"indexed":false,"name":"incident","type":"string"},{"indexed":false,"name":"effectuation","type":"uint256"}],"name":"Warning","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"notificationMsg","type":"string"}],"name":"Notification","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"notificationMsg","type":"string"},{"indexed":false,"name":"vaultAddress","type":"address"}],"name":"Notification","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"notificationMsg","type":"string"},{"indexed":false,"name":"vaultAddress","type":"address"},{"indexed":false,"name":"incident","type":"string"}],"name":"Notification","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"notificationMsg","type":"string"},{"indexed":false,"name":"vaultAddress","type":"address"},{"indexed":false,"name":"uint1","type":"uint256"}],"name":"Notification","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"notificationMsg","type":"string"},{"indexed":false,"name":"vaultAddress","type":"address"},{"indexed":false,"name":"uint1","type":"uint256"},{"indexed":false,"name":"uint2","type":"uint256"}],"name":"Notification","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"notificationMsg","type":"string"},{"indexed":false,"name":"addressSender","type":"address"},{"indexed":false,"name":"vaultAddress","type":"address"},{"indexed":false,"name":"uint1","type":"uint256"},{"indexed":false,"name":"uint2","type":"uint256"}],"name":"Notification","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"notificationMsg","type":"string"},{"indexed":false,"name":"addressSender","type":"address"},{"indexed":false,"name":"addressBeneficiary","type":"address"},{"indexed":false,"name":"amountWei","type":"uint256"},{"indexed":false,"name":"newBalanceSender","type":"uint256"},{"indexed":false,"name":"newBalanceWeiBeneficiary","type":"uint256"}],"name":"Notification","type":"event"}]);
  const contractInstance = contract.at("0x08D6584107e3eE0dECD5025fbb5Cf197c459bC1C");

  return contractInstance;
}

function donate(amountEth) {
  contractInstance = getContract();
  amountWei = web3.toWei(amountEth)
  // Donate
  console.log("Donating " + amountEth + " eth");
  contractInstance.donate({value: amountWei}, (error, result) => {
    if (!error) {
      document.location.href = "receipt.html?txn=" + result;
    } else {
      document.location.href = "error.html";
    }
  });
}
