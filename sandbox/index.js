require('@babel/register');

const args = require('yargs').argv || {};
const data = require(args.file);

console.log(data);
