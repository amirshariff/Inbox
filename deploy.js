const HDWalletProvider = require('truffle-hdwallet-provider');
const Web3 = require('web3');
const { interface, bytecode } = require('./compile');

const provider = new HDWalletProvider(
	'seek surprise car vast virus sorry space injury animal injury false umbrella',
	'https://rinkeby.infura.io/v3/0b7faa69685443a69eaf5ebdb319ea18'
);

const web3 = new Web3(provider);

const deploy = async () => {
	const accounts = await web3.eth.getAccounts();

	console.log('Attempting to deploy a contract from', accounts[0]);

	results = await new web3.eth.Contract(JSON.parse(interface))
		.deploy({ data: bytecode, arguments: ['Hi there'] })
        .send({ gas: '1000000', from: accounts[0] });
    
    console.log('constract is deployed at ',results.options.address)
};
deploy();
