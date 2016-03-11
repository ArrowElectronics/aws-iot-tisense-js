'use strict';

var deepcopy = require('deepcopy');

var action = require('./../../resources/things');

var config = require('tisense-config');

var LoggerFactory = require('./../../util/log').LoggerFactory;

function addLogger(lambdaContext, context) {
  var fields = {};

  if (lambdaContext.hasOwnProperty('awsRequestId')) {
    fields.requestId = context.awsRequestId
  }

  var loggerFactory = new LoggerFactory({
    type: 'SimpleStream',
    config: {
      name: 'tisense',
      level: 'debug'
    }
  });
  context.logger = loggerFactory.getLogger(fields);
}

function configure(lambdaContext) {
  var context = {
    config: {
      region: config.region
    }
  };

  addLogger(lambdaContext, context);

  return context;
}

// Lambda Handler
module.exports.handler = function(event, lambdaContext) {
  var context = configure(lambdaContext);

  action(event, context,
    function(error, result) {
      return lambdaContext.done(error, result);
    }
  );
};
