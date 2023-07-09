'use strict';

/*
 * @param {object} robot
 *
 * @return {object}
*/

function inverseRobot(robot) {
  // "robot"'s keys become values and values become "robot"'s keys
  const turnedRobot = {};

  for (const key in robot) {
    const INCOMING_ROBOT_VALUE = robot[key];
    const INCOMING_ROBOT_KEY = key;

    // Check if there are already such values in the created object
    const hasDoubleValue = turnedRobot.hasOwnProperty(INCOMING_ROBOT_VALUE);
    const hasDoubleKey = turnedRobot.hasOwnProperty(INCOMING_ROBOT_KEY);

    // if turnedRobot has double keys or values, return null
    if (hasDoubleValue || hasDoubleKey) {
      return null;
    }

    turnedRobot[INCOMING_ROBOT_VALUE] = INCOMING_ROBOT_KEY;
  }

  return turnedRobot;
}

module.exports = inverseRobot;
