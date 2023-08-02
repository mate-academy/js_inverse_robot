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

    if (inverseObject.hasOwnProperty(value)) {
      return null;
    }

    inverseObject[value] = key;
  }

  return inverseObject;
}

module.exports = inverseRobot;
