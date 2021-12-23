const axios = require('axios');
const colors = require("colors");

class CryptoApi { 
    constructor(apiKey) { 
        this.apiKey = apiKey;
        this.baseUrl = "https://api.nomics.com/v1/currencies/ticker";
    }
   
    getPrice = async(coinOptions,currencyOptions) => { 
        try {
            const res = await axios.get(`${this.baseUrl}?key=${this.apiKey}&ids=${coinOptions}&convert=${currencyOptions}&per-page=100&page=1`);
            return res;
        } catch (error) {
            console.log(error.message.red);
            
        }
    }


}

module.exports = CryptoApi;