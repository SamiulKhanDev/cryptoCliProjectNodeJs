#!/usr/bin/env node

const { Command } = require('commander');
const { version:ver } = require("./package.json");
const program = new Command();
program.version(ver);
program
    .command('key', 'Manage your api key from any crypto site')
    .command('check', 'Check coin price info');
   
    

program.parse(process.argv);



