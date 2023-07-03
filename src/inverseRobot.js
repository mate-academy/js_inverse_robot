'use strict';

/*
 * @param {object} robot
 *
 * @return {object}
*/

function inverseRobot(robot) {
  const inverseObject = {};

  for (const key in robot) {
    const value = robot[key];

    if (value in inverseObject) {
      return null;
    }

    inverseObject[value] = key;
  }

  return inverseObject;
}

module.exports = inverseRobot;
