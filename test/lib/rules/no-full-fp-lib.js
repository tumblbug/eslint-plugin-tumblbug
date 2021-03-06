/**
 * @fileoverview Full FP libs should not be imported
 * @author Bjorn Tegelund
 * @copyright 2016 Bjorn Tegelund. All rights reserved.
 * See LICENSE file in root directory for full license.
 */
'use strict';

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

var rule = require('../../../lib/rules/no-full-fp-lib'),
  RuleTester = require('eslint').RuleTester;

RuleTester.setDefaultConfig({
  parser: 'babel-eslint',
  ecmaFeatures: {
    modules: true,
  },
});


//------------------------------------------------------------------------------
// Tests
//------------------------------------------------------------------------------

var ruleTester = new RuleTester();
ruleTester.run('no-full-fp-lib', rule, {
  valid: [
    'import map from \'lodash/map\';',
  ],
  invalid: [
    {
      code: 'import _ from \'lodash\';',
      errors: [{
        message: 'Import inidividual functions instead of full FP libraries',
        type: 'ImportDeclaration'
      }]
    }
  ]
});
