const { Command } = require('commander');
const program = new Command();
const price = require("./allFunctions/crypto-check/check-price")
program
    .command('price')
    .description('check coin price')
    .option('--coin <CoinName>', "Information about a specific coin", 'BTC,ETH')
    .option('--cur <CurrencyName>',"Converting crypto to currency",'INR')
    .action((argumentsPassedByUser) =>  price(argumentsPassedByUser) )

program.parse(process.argv);
