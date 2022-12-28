'use strict';

/*
 * @param {object} robot
 *
 * @return {object}
*/

function inverseRobot(robot) {
  // write code here
  const valueArr = Object.values(robot);

  for (let i = 0; i < valueArr.length; i++) {
    if (valueArr.indexOf(valueArr[i]) !== valueArr.lastIndexOf(valueArr[i])) {
      return null;
    }
  }

  const newRobot = {};

  for (const key in robot) {
    newRobot[robot[key]] = key;
  }

  return newRobot;
}

module.exports = inverseRobot;
