/*
* Constants
*/
const mainAddress = "0x0";
const ropstenAddress = "0x08D6584107e3eE0dECD5025fbb5Cf197c459bC1C";
const formIds = ["form-activate", "form-deposit", "form-withdraw", "form-transfer"];
var abi;
fetch('../contracts/e-banker.abi')
.then(response => response.json())
.then(data => abi = data);

/*
* Functions
*/
function writeNetwork(network) {
  document.getElementById("p-network-msg").innerHTML = "Network: " + network;
}

function writeAccount(msg) {
  document.getElementById("p-account-msg").innerHTML = msg;
}

function writeBankBalance(balance, unit) {
  document.getElementById("p-bank-balance-msg").innerHTML = "Balance: " + balance + " " + unit;
}
// Get and write bank balance
function getWriteBankBalance(contractInstance) {
  contractInstance.getBalance((error, balanceWei) => {
    var balanceEther = web3.fromWei(balanceWei, "ether");
    writeBankBalance(balanceEther, "eth");
  });
}

function writeWalletBalance(balance, unit) {
  document.getElementById("p-wallet-balance-msg").innerHTML = "Wallet balance: " + balance + " " + unit;
}
// Get and write wallet balance
function getWriteWalletBalance(account) {
  web3.eth.getBalance(account, (error, balanceWei) => {
    var balanceEther = web3.fromWei(balanceWei, "ether");
    writeWalletBalance(balanceEther, "eth");
  });
}

function writeIsActive(activeStr) {
  document.getElementById("p-account-active-msg").innerHTML = "Status: " + activeStr;
}
// Get and write if account is active
function getWriteActive(account, contractInstance) {
  contractInstance.getIsActive(account, (error, isActive) => {
    if (isActive) {
      writeIsActive('active');
    } else {
      writeIsActive('inactive');
    }
  });
}

function writeFallbackAddress(fallbackAddress) {
  document.getElementById("p-fallback-address-msg").innerHTML = "Fallback address: " + fallbackAddress;
}
function getWriteFallbackAddress(contractInstance) {
  contractInstance.getFallbackAddress((error, fallbackAddress) => {
    writeFallbackAddress(fallbackAddress);
  });
}

function writeFallbackDeposit(fallbackDeposit, unit) {
  document.getElementById("p-fallback-deposit-msg").innerHTML = "Fallback deposit: " + fallbackDeposit + " " + unit;
}
function getWriteFallbackDeposit(contractInstance) {
  contractInstance.getFallbackDeposit((error, fallbackDepositWei) => {
    var fallbackDepositEther = web3.fromWei(fallbackDepositWei, "ether");
    writeFallbackDeposit(fallbackDepositEther, "eth");
  });
}

function writeFallbackDepositPeriod(fallbackDepositPeriod, unit) {
  document.getElementById("p-fallback-deposit-period-msg").innerHTML = "Fallback deposit period: " + fallbackDepositPeriod + " " + unit;
}
function getWriteFallbackDepositPeriod(contractInstance) {
  contractInstance.getFallbackDepositPeriod((error, fallbackDepositPeriodSec) => {
    writeFallbackDepositPeriod(fallbackDepositPeriodSec, "sec");
  });
}

function writeCumulativeAllowance(cumulativeAllowance, unit) {
  document.getElementById("p-cumulative-allowance-msg").innerHTML = "Cumulative allowance: " + cumulativeAllowance + " " + unit;
}
function getWriteCumulativeAllowance(contractInstance) {
  contractInstance.getCumulativeAllowance((error, cumulativeAllowanceWei) => {
    var cumulativeAllowanceEther = web3.fromWei(cumulativeAllowanceWei, "ether")
    writeCumulativeAllowance(cumulativeAllowanceEther, "eth");
  });
}

function writeAllowancePeriod(allowancePeriod, unit) {
  document.getElementById("p-allowance-period-msg").innerHTML = "Allowance period: " + allowancePeriod + " " + unit;
}
function getWriteAllowancePeriod(contractInstance) {
  contractInstance.getAllowancePeriod((error, allowancePeriodsec) => {
    writeAllowancePeriod(allowancePeriodsec, "sec");
  });
}

function writeFreeAllowance(freeAllowance, unit) {
  document.getElementById("p-free-allowance-msg").innerHTML = "Free allowance: " + freeAllowance + " " + unit;
}
function getWriteFreeAllowance(contractInstance) {
  contractInstance.getFreeAllowance((error, freeAllowanceWei) => {
    var freeAllowanceEther = web3.fromWei(freeAllowanceWei, "ether")
    writeFreeAllowance(freeAllowanceEther, "eth");
  });
}

function writeAllowanceExpiration(allowanceExpiration) {
  document.getElementById("p-allowance-expiration-msg").innerHTML = "Allowance expiration: " + allowanceExpiration;
}
function getWriteAllowanceExpiration(contractInstance) {
  contractInstance.getAllowanceExpiration((error, allowanceExpirationSec) => {
    var expirationDatetime = new Date(parseInt(allowanceExpirationSec['c'][0],  allowanceExpirationSec['s'] / allowanceExpirationSec['e']) * 1000);
    var userLang = navigator.language || navigator.userLanguage;
    writeAllowanceExpiration(expirationDatetime.toLocaleString(userLang));
  });
}

function writeNewAllowancesEffectuation(newAllowancesEffectuation) {
  document.getElementById("p-new-allowances-effectuation-msg").innerHTML = "New allowances effectuation: " + newAllowancesEffectuation;
}
function getWriteNewAllowancesEffectuation(contractInstance) {
  contractInstance.getNewAllowancesEffectuation((error, newAllowancesEffectuation) => {
    var effectuationDatetime = new Date(parseInt(newAllowancesEffectuation['c'][0],  newAllowancesEffectuation['s'] / newAllowancesEffectuation['e']) * 1000);
    var userLang = navigator.language || navigator.userLanguage;
    writeNewAllowancesEffectuation(effectuationDatetime.toLocaleString(userLang));
  });
}

function writeNewCumulativeAllowance(newCumulativeAllowance) {
  document.getElementById("p-new-cumulative-allowance-msg").innerHTML = "New cumulative allowance: " + newCumulativeAllowance;
}
function getWriteNewCumulativeAllowance(contractInstance) {
  contractInstance.getNewCumulativeAllowance((error, newCumulativeAllowanceWei) => {
    var newCumulativeAllowanceEther = web3.fromWei(newCumulativeAllowanceWei, "ether")
    writeNewCumulativeAllowance(newCumulativeAllowanceEther, "ether");
  });
}

function writeNewAllowancePeriod(newAllowancePeriod, unit) {
  document.getElementById("p-new-allowance-period-msg").innerHTML = "New allowance period: " + newAllowancePeriod + " " + unit;
}
function getWriteNewAllowancePeriod(contractInstance) {
  contractInstance.getNewAllowancePeriod((error, newAllowancePeriodSec) => {
    writeNewAllowancePeriod(newAllowancePeriodSec, "sec");
  });
}

function writeNewFallbackDepositEffectuation(newFallbackDepositEffectuation) {
  document.getElementById("p-new-fallback-deposit-effectuation-msg").innerHTML = "New fallback deposit effectuation: " + newFallbackDepositEffectuation;
}
function getWriteNewFallbackDepositEffectuation(contractInstance) {
  contractInstance.getNewFallbackDepositEffectuation((error, newFallbackDepositEffectuation) => {
    var effectuationDatetime = new Date(parseInt(newFallbackDepositEffectuation['c'][0],  newFallbackDepositEffectuation['s'] / newFallbackDepositEffectuation['e']) * 1000);
    var userLang = navigator.language || navigator.userLanguage;
    writeNewFallbackDepositEffectuation(effectuationDatetime.toLocaleString(userLang));
  });
}

function writeNewFallbackDeposit(newFallbackDeposit, unit) {
  document.getElementById("p-new-fallback-deposit-msg").innerHTML = "New fallback deposit: " + newFallbackDeposit + " " + unit;
}
function getWriteNewFallbackDeposit(contractInstance) {
  contractInstance.getNewFallbackDeposit((error, newFallbackDepositWei) => {
    var newFallbackDepositEther = web3.fromWei(newFallbackDepositWei, "ether");
    writeNewFallbackDeposit(newFallbackDepositEther, "eth");
  });
}

function writeNewFallbackDepositPeriod(newFallbackDepositPeriod, unit) {
  document.getElementById("p-new-fallback-deposit-period-msg").innerHTML = "New fallback deposit period: " + newFallbackDepositPeriod + " " + unit;
}
function getWriteNewFallbackDepositPeriod(contractInstance) {
  contractInstance.getNewFallbackDepositPeriod((error, newFallbackDepositPeriodSec) => {
    writeNewFallbackDepositPeriod(newFallbackDepositPeriodSec, "sec");
  });
}

window.addEventListener('load', async () => {
  // First hide all forms
  hideElements(formIds);
  if (window.ethereum) {
    window.web3 = new Web3(ethereum);
    try {
      // Request access to account
      await ethereum.enable();
      // Get accounts
      var accounts = web3.eth.accounts;
      // Write accounts
      writeAccount('Account: ' + accounts[0]);
      // Write wallet balance
      getWriteWalletBalance(accounts[0]);
      // Get contract
      const contract = web3.eth.contract(abi);
      // Get contract instance
      web3.version.getNetwork((error, netId) => {
        switch (netId) {
          case "1":
            var contractInstance = contract.at(mainAddress);
            writeNetwork("Main Ethereum Network")
            break
          case "3":
            var contractInstance = contract.at(ropstenAddress);
            writeNetwork("Ropsten Test Network")
            break
          default:
            var contractInstance = null;
        }
        // Get account info
        if (contractInstance != null) {
          getWriteBankBalance(contractInstance);
          getWriteActive(accounts[0], contractInstance);
          getWriteFallbackAddress(contractInstance);
          getWriteCumulativeAllowance(contractInstance);
          getWriteFreeAllowance(contractInstance);
          getWriteNewCumulativeAllowance(contractInstance);
          getWriteFallbackDeposit(contractInstance);
          getWriteFallbackDepositPeriod(contractInstance)
          getWriteNewFallbackDeposit(contractInstance);
          getWriteNewFallbackDepositPeriod(contractInstance);
          getWriteNewAllowancePeriod(contractInstance);
          getWriteAllowancePeriod(contractInstance);
          getWriteAllowanceExpiration(contractInstance);
          getWriteNewAllowancesEffectuation(contractInstance);
          getWriteNewFallbackDepositEffectuation(contractInstance);
        }
      });
    } catch (error) {
      writeAccount('<p>Allow access to your wallet to proceed.</p>');
    }
  } else {
    writeAccount('<p>Your browser doesn\'t support Ethereum. Try installing <a href="https://metamask.io/" target="_blank">MetaMask.</a></p>');
  }
});



function hideElement(id) {
  document.getElementById(id).style.display="none";
}

function showElement(id) {
  document.getElementById(id).style.display="block";
}

function hideElements(ids) {
  for (i = 0; i < ids.length; i++) {
    hideElement(ids[i]);
    // Set values to ""
    for (j = 0; j < document.getElementById(ids[i]).elements.length; j++) {
      document.getElementById(ids[i]).elements[j].value = "";
    }
  }
}

function checkAddress(address) {
  if (!web3.isAddress(address)) {
    alert("Invalid address!");
    return false;
  } else {
    return true;
  }
}

function checkAmount(amount) {
  if (isNaN(amount) || amount < 0) {
    alert("Invalid amount!");
    return false;
  } else {
    return true;
  }
}

function checkPeriod(period) {
  if (isNaN(period) || period < 0) {
    alert("Invalid period!");
    return false;
  } else {
    return true;
  }
}

$(document).ready(function() {
  /* Activate */
  $("#button-activate").click(function(){
    // Hide all (other) forms
    hideElements(formIds);
    // Show current form
    showElement("form-activate");
  });
  $("#button-activate-submit").click(function() {
    // Get values
    var fallbackAddress = $("#text-activate-fallbackAddress").val();
    var fallbackDepositEth = parseFloat($("#text-activate-fallbackDepositEth").val());
    var fallbackDepositPeriodSec = parseInt($("#text-activate-fallbackDepositPeriodSec").val());
    var cumulativeAllowanceEth = parseFloat($("#text-activate-cumulativeAllowanceEth").val());
    var allowancePeriodSec = parseInt($("#text-activate-allowancePeriodSec").val());
    // Validate values
    if (fallbackAddress == "") {
      alert("Please fill in a fallback address.");
      return false;
    }
    if (!checkAddress(fallbackAddress)) {
      return false;
    }
    if (!checkAmount(fallbackDepositEth)) {
      return false;
    }
    if (!checkPeriod(fallbackDepositPeriodSec)) {
      return false;
    }
    if (!checkAmount(cumulativeAllowanceEth)) {
      return false;
    }
    if (!checkPeriod(allowancePeriodSec)) {
      return false;
    }
    // Submit transaction
    const contract = web3.eth.contract(abi);
    web3.version.getNetwork((error, netId) => {
      switch (netId) {
        case "1":
          var contractInstance = contract.at(mainAddress);
          writeNetwork("Main Ethereum Network")
          break
        case "3":
          var contractInstance = contract.at(ropstenAddress);
          writeNetwork("Ropsten Test Network")
          break
        default:
          var contractInstance = null;
      }
      contractInstance.activateVault(fallbackAddress, web3.toWei(fallbackDepositEth, "ether"), fallbackDepositPeriodSec, web3.toWei(cumulativeAllowanceEth, "ether"), allowancePeriodSec, (error, result) => {
        if (!error) {
          document.location.href = "receipt.html?txn=" + result;
        } else {
          document.location.href = "error.html";
        }
      });
    });
  });

  /* Deposit */
  $("#button-deposit").click(function() {
    // Hide all (other) forms
    hideElements(formIds);
    // Show current form
    showElement("form-deposit");
  });
  $("#button-deposit-submit").click(function() {
    var address = $("#text-deposit-address").val();
    var amountEth = parseFloat($("#text-deposit-amountEth").val());
    if (address == "") {
      address = web3.eth.accounts[0];
    }
    if (!checkAddress(address)) {
      return false;
    }
    if (!checkAmount(amountEth)) {
      return false;
    }
    const contract = web3.eth.contract(abi);
    web3.version.getNetwork((error, netId) => {
      switch (netId) {
        case "1":
          var contractInstance = contract.at(mainAddress);
          writeNetwork("Main Ethereum Network")
          break
        case "3":
          var contractInstance = contract.at(ropstenAddress);
          writeNetwork("Ropsten Test Network")
          break
        default:
          var contractInstance = null;
      }
      contractInstance.depositFunds(address, {value: web3.toWei(amountEth, "ether")}, (error, result) => {
        if (!error) {
          document.location.href = "receipt.html?txn=" + result;
        } else {
          document.location.href = "error.html";
        }
      });
    });
  });

  $("#button-withdraw").click(function() {
    // Hide all (other) forms
    hideElements(formIds);
    // Show current form
    showElement("form-withdraw");
  });
  $("#button-withdraw-submit").click(function() {
    //var address = $("#text-withdraw-address").val();
    var amountEth = parseFloat($("#text-withdraw-amountEth").val());
    /*
    if (address == "") {
      address = web3.eth.accounts[0];
    }
    if (!checkAddress(address)) {
      return false;
    }
    */
    if (!checkAmount(amountEth)) {
      return false;
    }
    const contract = web3.eth.contract(abi);
    web3.version.getNetwork((error, netId) => {
      switch (netId) {
        case "1":
          var contractInstance = contract.at(mainAddress);
          writeNetwork("Main Ethereum Network")
          break
        case "3":
          var contractInstance = contract.at(ropstenAddress);
          writeNetwork("Ropsten Test Network")
          break
        default:
          var contractInstance = null;
      }
      contractInstance.withdrawFunds(web3.toWei(amountEth, "ether"), (error, result) => {
        if (!error) {
          document.location.href = "receipt.html?txn=" + result;
        } else {
          document.location.href = "error.html";
        }
      });
    });
  });

  $("#button-transfer").click(function() {
    // Hide all (other) forms
    hideElements(formIds);
    // Show current form
    showElement("form-transfer");
  });
  $("#button-transfer-submit").click(function() {
    var address = $("#text-transfer-address").val();
    var amountEth = parseFloat($("#text-transfer-amountEth").val());
    if (!checkAddress(address)) {
      return false;
    }
    if (!checkAmount(amountEth)) {
      return false;
    }
    const contract = web3.eth.contract(abi);
    web3.version.getNetwork((error, netId) => {
      switch (netId) {
        case "1":
          var contractInstance = contract.at(mainAddress);
          writeNetwork("Main Ethereum Network")
          break
        case "3":
          var contractInstance = contract.at(ropstenAddress);
          writeNetwork("Ropsten Test Network")
          break
        default:
          var contractInstance = null;
      }
      contractInstance.transferFunds(web3.toWei(amountEth, "ether"), address, (error, result) => {
        if (!error) {
          document.location.href = "receipt.html?txn=" + result;
        } else {
          document.location.href = "error.html";
        }
      });
    });
  });

  /* Invoke fallback */
  $("#button-fallback").click(function() {
    const contract = web3.eth.contract(abi);
    web3.version.getNetwork((error, netId) => {
      switch (netId) {
        case "1":
          var contractInstance = contract.at(mainAddress);
          writeNetwork("Main Ethereum Network")
          break
        case "3":
          var contractInstance = contract.at(ropstenAddress);
          writeNetwork("Ropsten Test Network")
          break
        default:
          var contractInstance = null;
      }
      contractInstance.invokeFallback((error, result) => {
        if (!error) {
          document.location.href = "receipt.html?txn=" + result;
        } else {
          document.location.href = "error.html";
        }
      });
    });
  });
});
