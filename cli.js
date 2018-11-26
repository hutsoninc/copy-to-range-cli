#!/usr/bin/env node
'use strict';
const meow = require('meow');
const copyToRange = require('copy-to-range');

const cli = meow(`
	Usage
	  $ copy-to-range <file> <int>-<int>
	Options
      --destination, -d  Destination for dirs
      --prepend, -p  Prepend to destination dir names
      --append, -a  Append to destination dir names
	Example
	  $ copy-to-range file.txt 1-5,7,9-10
`, {
    flags: {
        append: {
            type: 'string',
            default: '',
            alias: 'a'
        },
        prepend: {
            type: 'string',
            default: '',
            alias: 'p'
        },
        destination: {
            type: 'string',
            default: '',
            alias: 'd'
        }
    }
});

const input = cli.input;

if (input.length === 0) {
    console.error('No args provided');
    process.exit(1);
}

if (input.length === 1) {
    console.error('No range provided');
    process.exit(1);
}

copyToRange(input[0], input[1], cli.flags);