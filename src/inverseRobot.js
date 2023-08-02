'use strict';

/*
 * @param {object} robot
 *
 * @return {object}
*/

function inverseRobot(robot) {
  // check if the robot is an object
  if (typeof robot !== 'object' || robot === null) {
    return null;
  }

  // "robot"'s keys become values and values become "robot"'s keys
  const turnedRobot = {};

  for (const key in robot) {
    const incomingRobotValue = robot[key];
    const incomingRobotKey = key;

    // Check if there are already such values in the created object
    const hasDoubleValue
      = Object.prototype.hasOwnProperty.call(turnedRobot, incomingRobotValue);
    const hasDoubleKey
      = Object.prototype.hasOwnProperty.call(turnedRobot, incomingRobotKey);

    // if turnedRobot has double keys or values, return null
    if (hasDoubleValue || hasDoubleKey) {
      return null;
    }

    turnedRobot[incomingRobotValue] = incomingRobotKey;
  }

  return turnedRobot;
}

module.exports = inverseRobot;
