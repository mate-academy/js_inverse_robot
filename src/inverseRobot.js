'use strict';

/*
 * @param {object} robot
 *
 * @return {object}
*/

function inverseRobot(robot) {
  const inverseObj = {};

  for (const key in robot) {
    if (inverseObj.hasOwnProperty(robot[key])) {
      return null;
    }

    inverseObj[robot[key]] = key;
  }

  return inverseObj;
}

module.exports = inverseRobot;
