const Configstore = require('configstore');
const pkg = require("../../package.json")
const colors = require("colors")
class KeyManager { 
    constructor() { 
        this.conf = new Configstore(pkg.name);
    }

     setKey = (key) => { 
         this.conf.set("ApiKey", key);
         return key;
     }
    getKey = () => {
        const key = this.conf.get("ApiKey");
        if (!key) { 
            // throw new Error("NO API KEY FOUND -> GET YOUR FREE API KEY FROM ANY CRYPTO PROVIDE");
            console.log("NO API KEY FOUND -> GET YOUR FREE API KEY FROM ANY CRYPTO PROVIDE".red);
            return;
            
        }

        return key;
    }

    deleteKey = () => { 
        const key = this.conf.get("ApiKey");
        if (!key) { 
            throw new Error("NO API KEY FOUND -> GET YOUR FREE API KEY FROM ANY CRYPTO PROVIDER");
        }

        this.conf.delete("ApiKey");
        return;
    }
    
}

module.exports = KeyManager;