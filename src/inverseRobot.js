'use strict';

/*
 * @param {object} robot
 *
 * @return {object}
*/

function inverseRobot(robot) {
  const inverseObject = {};

  for (const [key, value] of Object.entries(robot)) {
    if (inverseObject.hasOwnProperty(value)) {
      return null;
    }
    inverseObject[value] = key;
  }

  return inverseObject;
}

module.exports = inverseRobot;
