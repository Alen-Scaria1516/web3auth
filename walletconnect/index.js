var account;

// https://docs.walletconnect.com/quick-start/dapps/web3-provider
var provider = new WalletConnectProvider.default({
  rpc: {
    1: "https://cloudflare-eth.com/", // https://ethereumnodes.com/
    137: "https://polygon-rpc.com/", // https://docs.polygon.technology/docs/develop/network-details/network/
    // ...

  },
  // bridge: 'https://bridge.walletconnect.org',
});

async function connectWC(){
    await provider.enable();
  
    //  Create Web3 instance
    const web3 = new Web3(provider);
    window.w3 = web3
  
    var accounts  = await web3.eth.getAccounts();
     // get all connected accounts
    if(accounts.length)
    {
        document.querySelector("button").innerHTML= "Connected!";
        document.querySelector("button").classList.add("connected");
    }
     account = accounts[0]; // get the primary account
}



