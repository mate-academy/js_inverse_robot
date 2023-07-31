'use strict';

/*
 * @param {object} robot
 *
 * @return {object}
*/

function inverseRobot(robot) {
  const inverseObject = {};

  for (const key in robot) {
    const ROBOT_KEY = robot[key];

    if (inverseObject.hasOwnProperty(ROBOT_KEY)) {
      return null;
    }

    inverseObject[ROBOT_KEY] = key;
  }

  return inverseObject;
}

module.exports = inverseRobot;
