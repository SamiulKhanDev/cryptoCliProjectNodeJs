const inquirer = require('inquirer');
const colors = require("colors");
const KeyManager = require("../utility/keyManager");

const manager = new KeyManager();

const isRequired = (input) => { 
    return input === "" ? "Value Is required" : true;

}

const setKey = async() => { 
    const input =await inquirer.prompt({
        type: String,
        name: "key",
        message: "Enter Api Key ".green + "Get Your Key From " +"Any Crypto Api Provider".red,
        validate:isRequired,
    })

    const key =manager.setKey(input.key);
    
    if (key) { 
        console.log("Api Key Set".green);
        
    }
}

module.exports = setKey;