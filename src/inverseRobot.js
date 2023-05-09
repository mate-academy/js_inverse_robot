'use strict';

/*
 * @param {object} robot
 *
 * @return {object}
*/

function inverseRobot(robot) {
  const obj = {};

  for (const item in robot) {
    if (obj[robot[item]] !== undefined) {
      return null;
    }

    obj[robot[item]] = item;
  }

  return obj;
}

module.exports = inverseRobot;
