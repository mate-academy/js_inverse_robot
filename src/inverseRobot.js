'use strict';

/*
 * @param {object} robot
 *
 * @return {object}
*/

function inverseRobot(robot) {
  // write code here
  const resultRobot = {};

  for (const value in robot) {
    if (resultRobot[robot[value]]) {
      return null;
    }

    resultRobot[robot[value]] = value;
  }

  return resultRobot;
}

module.exports = inverseRobot;
