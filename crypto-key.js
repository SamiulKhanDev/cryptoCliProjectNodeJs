const { Command } = require('commander');
const program = new Command();
const setKey = require("./allFunctions/crypto-key/key_set");
const showKey = require("./allFunctions/crypto-key/show_key");
const removeKey = require("./allFunctions/crypto-key/remove_key");


program
    .command("set")
    .description("Set your api key")
    .action(() => {
        setKey();
    });

program
    .command("show")
    .description("Show your api key")
    .action(() => {
        showKey();
    });
program
    .command("remove")
    .description("Remove your api key")
    .action(() => {
        removeKey();
    });

program.parse(process.argv);

