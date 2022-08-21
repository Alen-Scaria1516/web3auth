// const ethers = require('ethers');
async function connect(){
    if (typeof window.ethereum !== "undefined") {
          await ethereum.request({ method: "eth_requestAccounts" });

        document.getElementById("connectButton").innerHTML = "Connected!!";
        document.getElementById("connectButton").classList.add("connected"); 

        const accounts = await ethereum.request({ method: "eth_accounts" });
        console.log(accounts);
      } else {
        document.getElementById("connectButton").innerHTML =
        '<a class ="page-link" href="https://metamask.io/download/" target="_main">Install Meta Mask</a>';
      }
}
