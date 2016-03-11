'use strict';

var config = require('tisense-config');

var configureAws = function(AWS) {
  AWS.config.update({
    region: config.region
  });
};

module.exports = {
  configureAws: configureAws
};