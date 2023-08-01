'use strict';

/*
 * @param {object} robot
 *
 * @return {object}
*/

function inverseRobot(robot) {
  const inverseObject = {};

  for (const key in robot) {
    const robotKeys = robot[key];

    if (inverseObject.hasOwnProperty(robotKeys)) {
      return null;
    }

    inverseObject[robotKeys] = key;
  }

  return inverseObject;
}

module.exports = inverseRobot;
