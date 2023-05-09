'use strict';

/*
 * @param {object} robot
 *
 * @return {object}
*/

function inverseRobot(robot) {
  const newObj = {};

  for (const key in robot) {
    if (newObj[robot[key]]) {
      return null;
    } else {
      newObj[robot[key]] = key;
    }
  }

  return newObj;
}

module.exports = inverseRobot;
