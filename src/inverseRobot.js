'use strict';

/*
 * @param {object} robot
 *
 * @return {object}
*/

function inverseRobot(robot) {
  const newArr = {};

  for (const key in robot) {
    if (newArr[robot[key]]) {
      return null;
    } else {
      newArr[robot[key]] = key;
    }
  }

  return newArr;
}

module.exports = inverseRobot;
