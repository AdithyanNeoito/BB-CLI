#!/usr/bin/env node

/**
 * Copyright (c) Appblocks. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

const { Command } = require('commander')
const upload = require('../subcommands/upload')

const program = new Command()

program
  .argument('[block]', 'name of block or block type')
  .option('-env, --environment <environment>', 'environment')
  .option('-cn, --config-name <config-name>', 'Name of the configuration')
  .action(upload)

program.parse(process.argv)