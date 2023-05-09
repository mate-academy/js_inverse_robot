'use strict';

/*
 * @param {object} robot
 *
 * @return {object}
*/

function inverseRobot(robot) {
  const inverseObject = {};

  for (const key in robot) {
    if (inverseObject.hasOwnProperty(robot[key])) {
      return null;
    }

    inverseObject[robot[key]] = key;
  }

  return inverseObject;
}

module.exports = inverseRobot;
