'use strict';

/*
 * @param {object} robot
 *
 * @return {object}
*/

function inverseRobot(robot) {
  const inverseObject = {};

  for (const key in robot) {
    const ROBOT_KEYS = robot[key];

    if (ROBOT_KEYS in inverseObject) {
      return null;
    }

    inverseObject[ROBOT_KEYS] = key;
  }

  return inverseObject;
}

module.exports = inverseRobot;
