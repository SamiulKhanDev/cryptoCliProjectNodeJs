const CryptoApi = require("../utility/crypto-api");
const KeyManager= require("../utility/keyManager");


const manager = new KeyManager();

const key = manager.getKey();




const price = async (argumentsPassedByUser) => { 
    if (!key) { 
        return;
    }
    const cryptoApi = new CryptoApi(key);
    try {
        const result= await cryptoApi.getPrice(argumentsPassedByUser.coin,argumentsPassedByUser.cur);
        console.log(result.data);
    } catch (error) {
        console.log(error.message);
        
    }
   

    

    
}


module.exports = price;