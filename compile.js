const path = require('path');
const fs = require('fs');
const solc = require('solc');

const inboxPath = path.resolve(__dirname, 'contracts', 'inbox.sol');
const source = fs.readFileSync(inboxPath, 'utf8');

module.exports = solc.compile(source, 1).contracts[':Inbox']

// var input = {
// 	language: 'Solidity',
// 	sources: { 'inbox.sol': { content: source } },
// 	settings: {
// 		outputSelection: {
// 			'*': {
// 				'*': ['*'],
// 			},
// 		},
// 	},
// };

// var output = JSON.parse(solc.compile(JSON.stringify(input)));
// console.log('output', output); //allways check what you are getting

// module.exports = output.contracts['inbox.sol']['Inbox'];