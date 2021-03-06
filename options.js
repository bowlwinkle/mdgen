const config = require('./config');

function httpOptions (yargs) {
    return yargs
        .option('h', {
            alias: 'host',
            demandOption: false,
            default: config.elasticHost,
            describe: 'ElasticSearch URL',
        })
        .option('p', {
            alias: 'port',
            demandOption: false,
            default: config.port,
            describe: 'The port to run the auth code server on'
        })
        .option('r', {
            alias: 'path',
            demandOption: false,
            default: config.path,
            describe: 'Path to POST records',
            type: 'array'
        })
        .option('s', {
            alias: 'schema',
            demandOption: false,
            default: config.exampleSchema,
            describe: 'Schema to use for generating data',
            type: 'array'
        })
        .option('a', {
            alias: 'amount',
            demandOption: false,
            default: config.amount,
            describe: 'Amount of records to generator'
        })
        .option('v', {
            alias: 'verbose',
            demandOption: false,
            default: false,
            describe: 'Verbose mode'
        })
        .option('m', {
            alias: 'method',
			demandOption: false,
			default: "POST",
            describe: 'HTTP Method to use'
        })
        .option('o', {
            alias: 'options',
            demandOption: false,
            describe: 'Command line options file'
        });
}

function fileOptions (yargs) {
    return yargs
        .option('f', {
            alias: 'file',
            demandOption: false,
            default: config.elasticHost,
            describe: 'File path to write generated data',
            type: 'array'
        })
        .option('s', {
            alias: 'schema',
            demandOption: false,
            default: config.exampleSchema,
            describe: 'Schema to use for generating data',
            type: 'array'
        })
        .option('a', {
            alias: 'amount',
            demandOption: false,
            default: config.amount,
            describe: 'Amount of records to generator'
        })
        .option('v', {
            alias: 'verbose',
            demandOption: false,
            default: false,
            describe: 'Verbose mode'
        });
}

function serveOptions (yargs) {
    return yargs
        .option('p', {
            alias: 'port',
            demandOption: false,
            default: config.port,
            describe: 'The port to run the auth code server on'
        })
        .option('t', {
            alias: 'type',
            demandOption: false,
            default: 0,
            describe: 'Array or object to wrap all resources for root GET request (0 = object, 1 = array)'
        })
        .option('s', {
            alias: 'schema',
            demandOption: false,
            default: config.exampleSchema,
            describe: 'Schema to use for generating data'
        })
        .option('a', {
            alias: 'amount',
            demandOption: false,
            default: config.amount,
            describe: 'Amount of records to generator'
        })
        .option('v', {
            alias: 'verbose',
            demandOption: false,
            default: false,
            describe: 'Verbose mode'
        });
}

module.exports = {
    httpOptions,
    fileOptions,
    serveOptions
};
