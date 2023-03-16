'use strict';

/*
 * @param {object} robot
 *
 * @return {object}
*/

function inverseRobot(robot) {
  const changedObj = {};

  for (const key in robot) {
    if (changedObj.hasOwnProperty(robot[key])) {
      return null;
    }
    changedObj[robot[key]] = key;
  }

  return changedObj;
}

module.exports = inverseRobot;
