'use strict';

/*
 * @param {object} robot
 *
 * @return {object}
*/

function inverseRobot(robot) {
  const inverseObject = {};

  for (const key in robot) {
    const robotValue = robot[key];

    if (inverseObject.hasOwnProperty(robotValue)) {
      return null;
    }
    inverseObject[robotValue] = key;
  }

  return inverseObject;
}

module.exports = inverseRobot;
