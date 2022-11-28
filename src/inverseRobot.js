'use strict';

/*
 * @param {object} robot
 *
 * @return {object}
*/

function inverseRobot(robot) {
  const newArr = {};

  for (const key in robot) {
    if (newArr.hasOwnProperty(robot[key])) {
      return null;
    }
    newArr[robot[key]] = key;
  }

  return newArr;
}

module.exports = inverseRobot;
