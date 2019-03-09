#!/usr/bin/env node

import yargs from 'yargs'
import { Args } from '../src/models'
import main from '../src/index'

let args = yargs
  .command('$0', 'Gather statistics about git commits')
  .option('cwd', {
    desc: 'The directory to read commits from',
    default: process.cwd()
  })
  .option('from', {
    desc: 'The commit after which commits should be considred',
    type: 'string'
  })
  .option('to', {
    desc: 'The commit at which more commits should be ignored',
    type: 'string'
  })
  .demandOption([ 'from', 'to' ])
  .help()
  .argv as yargs.Arguments<Args>

main(args)
