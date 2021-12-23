const KeyManager = require("../utility/keyManager");
const colors = require("colors");
const manager = new KeyManager();
const showKey = () => { 
    try {
        const key = manager.getKey();
        if (!key) {
            return;
        }
        console.log("Your Current API key is "+`${key}`.green);
        return key;
    } catch (error) {
        console.log(error.message.red);
        
    }
}

module.exports = showKey;

