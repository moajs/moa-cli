#!/usr/bin/env node
var argv = require('yargs')
  .usage('Usage: $0 <command> [options]')
  .command('init', 'init a new project', function (yargs) {
    // return yargs.option('u', {
    //         alias: 'url',
    //         describe: 'the URL to make an HTTP request to'
    //       })
  },
  function (argv) {
    console.log(argv)
  })
  .example('$0 count -f foo.js', 'count the lines in the given file')
  .alias('f', 'file')
  .nargs('f', 1)
  .describe('f', 'Load a file')
  .demand(1, ['f'])
  .help('h')
  .alias('h', 'help')
  .epilog('copyright 2015')
  .argv;

