'use strict';

/*
 * @param {object} robot
 *
 * @return {object}
*/

function inverseRobot(robot) {
  const returnObj = {};

  for (const key in robot) {
    if (returnObj[robot[key]] !== undefined) {
      return null;
    }

    returnObj[robot[key]] = key;
  }

  return returnObj;
}

module.exports = inverseRobot;
