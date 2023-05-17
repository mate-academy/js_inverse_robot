'use strict';

/*
 * @param {object} robot
 *
 * @return {object}
*/

function inverseRobot(robot) {
  // write code here
  const newRobot = {};
  const arr = Object.values(robot);

  if (arr.indexOf(arr[0], 1) !== -1) {
    return null;
  } else {
    for (const key in robot) {
      newRobot[robot[key]] = key;
    }
  }

  return newRobot;
}

module.exports = inverseRobot;
