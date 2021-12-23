const KeyManager = require("../utility/keyManager");
const colors = require("colors");
const manager = new KeyManager();
const removeKey = () => { 
   try {
       manager.deleteKey();
       console.log("The existing has been removed successfully".red);
       
   } catch (error) {
       
   }
}

module.exports = removeKey;
