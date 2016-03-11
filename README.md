# aws-iot-tisense-js

### Arrow TiSense

The TiSense project demonstrates the BeagleBone acting as a sensor gateway. Paired with Texas Instruments SensorTags using Bluetooth BLE, you can connect as many sensors as you want. Available sensor data includes, but not limited to IR thermopile temperature, 9-axis motion, digitial humidity, altimeter/pressure, ambient light, buzzer, magnet sensor, and digital microphone. Every couple of seconds, a client application written using the Amazon IoT JS SDK
uses MQTT to transfer the event to an Amazon data center where it is stored in a DynamoDB table.

The functionality of TiSense and how the application is configured is
detailed.  The documentation includes information on how to execute the client
and visit the dashboard.

# Getting Started

Please have the following information available:

* Amazon Account Number - (https://console.aws.amazon.com/billing/home#/account)
* Stage - Amazon API Gateway deploys to a stage, so it must be specified, By default 'dev' is used.
* S3 Identifier - S3 is used to host the client, it would be best to give it something unique. By default the last 5 characters of the machine id is used.

After the setup has completed, there are a few urls that are provided. Please make note of them: AWS API Gateway, and Dashboard

1. Navigate to the root of Arrow TiSense `/home/debian/arrow/aws-iot-tisense-js`
2. Run the setup script
```sh
    $ cd scripts
    $ ./setup.sh
```
3. Start the Client
```sh
    $ cd BeagleBone
    $ sudo npm start
```
4. Visit the TiSense Dashboard

## Uninstall and Cleanup

All the settings from the install are stored `scripts/.settings`
```sh
    $ cd scripts
    $ ./uninstall.sh 
```

For more information on the TiSense project, including how it is
deployed and configured, visit the
<a href="https://arrowelectronics.github.io/aws-iot-tisense-js" target="_blank">TiSense Project Page</a>.

## Appendix

If for some reason the setup script fails:
1. in the scripts folder, run ./uninstall.sh
2. then run ./setup.sh again

Check to see if bluetooth is on:
```sh
$ sudo hciconfig

//if not on
$ sudo service bluetooth start

//it should automatically start, if it's still down, you can use this command
$ sudo hciconfig hci0 up
```

# License
This SDK is distributed under the
[Apache License, Version 2.0](http://www.apache.org/licenses/LICENSE-2.0),
see LICENSE.txt and NOTICE.txt for more information
