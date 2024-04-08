'use strict';

/*
 * @param {object} robot
 *
 * @return {object}
*/

function inverseRobot(robot) {
  const NORMALIZED_ROBOT_OBJECT = {};
  const CONTROL_IF_KEY_DUBBED = [];

  for (const key in robot) {
    const RIGHT_WAY_ROBOT_KEY = robot[key];
    const RIGHT_WAY_ROBOT_VALUE = key;

    NORMALIZED_ROBOT_OBJECT[RIGHT_WAY_ROBOT_KEY] = RIGHT_WAY_ROBOT_VALUE;

    if (!CONTROL_IF_KEY_DUBBED.includes(RIGHT_WAY_ROBOT_KEY)) {
      CONTROL_IF_KEY_DUBBED.push(RIGHT_WAY_ROBOT_KEY);
    } else {
      return null;
    }
  }

  return NORMALIZED_ROBOT_OBJECT;
}

module.exports = inverseRobot;
