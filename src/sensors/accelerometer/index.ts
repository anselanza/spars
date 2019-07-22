// Use the RelativeOrientationSensor polyfill

// https://github.com/immersive-web/cardboard-vr-display/blob/13e4fe62ce1ceb31f0fe60955fa242b50c0d998d/src/pose-sensor.js
// https://github.com/immersive-web/cardboard-vr-display/tree/13e4fe62ce1ceb31f0fe60955fa242b50c0d998d/src/sensor-fusion

// https://intel.github.io/generic-sensor-demos/orientation-phone/?relative=1
// https://smus.com/sensor-fusion-prediction-webvr/
// Accelerometer data is very noisy, but stable over the long term
// Gyroscope data is smooth, but tends to drift over the long term

// https://github.com/jeromeetienne/AR.js/blob/048eebc113e1cd136c4fdbbaa491868d5a208887/three.js/examples/vendor/webvr-polyfill.js#L4842-L4988
// https://github.com/marquizzo/three-gimbal/blob/master/src/Gimbal.js

// TODO: reset on visibilitychange
// TODO: android has flipped axis
// TODO: iOS needs permissions
// TODO: take window orientation into account
// TODO: add lerping functionality

// NOTE: Chrome / iOS sensor only works on secure contexts

// event.beta has values between -90 and 90 on mobile Safari and between 180 and -180 on Firefox.
// event.gamma has values between -180 and 180 on mobile Safari and between 90 and -90 on Firefox.

export { FusionPoseSensor as Accelerometer } from './FusionPoseSensor';