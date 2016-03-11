# aws-iot-tisense-js

### Arrow TiSense

The TiSense project demonstrates the BeagleBone acting as a sensor gateway. Paired with Texas Instruments SensorTags using Bluetooth BLE, you can connect as many sensors as you want. Available sensor data includes, but not limited to IR thermopile temperature, 9-axis motion, digitial humidity, altimeter/pressure, ambient light, buzzer, magnet sensor, and digital microphone. Every couple of seconds, a client application written using the Amazon IoT JS SDK
uses MQTT to transfer the event to an Amazon data center where it is stored in a DynamoDB table.

The functionality of TiSense and how the application is configured is
detailed.  The documentation includes information on how to execute the client
and visit the dashboard.

# Getting Started

For more information on the TiSense project, including how it is
deployed and configured, visit the
<a href="https://arrowelectronics.github.io/aws-iot-tisense-js" target="_blank">TiSense Project Page</a>.

# License
This SDK is distributed under the
[Apache License, Version 2.0](http://www.apache.org/licenses/LICENSE-2.0),
see LICENSE.txt and NOTICE.txt for more information
