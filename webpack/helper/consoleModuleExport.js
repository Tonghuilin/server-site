require('@babel/register');

const args = require('yargs').argv || {};
const data = require(args.file);

console.log(JSON.stringify(data));
