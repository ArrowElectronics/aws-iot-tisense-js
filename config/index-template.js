'use strict';

var observationsName = 'TiSense-observations';
var sensorsName = 'TiSense-sensors';
var thingsName = 'TiSense-things';

module.exports = {
  region: '__aws_region__',
  accountNumber: '__aws_accountNumber__',
  admin: {
    registry: '__aws_registryDir__'
  },
  iam: {
    lambda: {
      roleName: 'TiSense-Lambda'
    },
    api: {
      roleName: 'TiSense-ApiGateway'
    },
    iot: {
      roleName: 'TiSense-IoT'
    }
  },
  lambda: {
    observations: {
      name: observationsName,
      handler: 'observations.handler'
    },
    sensors: {
      name: sensorsName,
      handler: 'sensors.handler'
    },
    things: {
      name: thingsName,
      handler: 'things.handler'
    }
  },
  dynamodb: {
    observations: {
      name: observationsName,
      observationHistoryIndex: 'observation-history-index'
    },
    sensors: {
      name: sensorsName,
      sensorIdentificationIndex: 'sensor-identification-index'
    }
  },
  iot: {
    policies: {
      TiSenseThing: 'TiSense'
    },
    topics: {
      sensors: 'TiSenseSensors',
      observations: 'TiSenseObservations'
    }
  }
};
