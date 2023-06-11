'use strict';

/*
 * @param {object} robot
 *
 * @return {object}
*/

function inverseRobot(robot) {
  const inverseObj = {};

  for (const [key, value] of Object.entries(robot)) {
    if (inverseObj.hasOwnProperty(value)) {
      return null;
    }
    inverseObj[value] = key;
  }

  return inverseObj;
}

module.exports = inverseRobot;
