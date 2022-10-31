'use strict';

/*
 * @param {object} robot
 *
 * @return {object}
*/

function inverseRobot(robot) {
  const newObj = {};

  for (const key in robot) {
    if (!newObj[robot[key]]) {
      newObj[robot[key]] = key;
    } else {
      return null;
    }
  }

  return newObj;
}

module.exports = inverseRobot;
