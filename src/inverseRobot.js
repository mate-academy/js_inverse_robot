'use strict';

/*
 * @param {object} robot
 *
 * @return {object}
*/

function inverseRobot(robot) {
  const obj = {};

  for (const key in robot) {
    if (robot[key] in obj) {
      return null;
    }

    obj[robot[key]] = key;
  }

  return obj;
}
module.exports = inverseRobot;
