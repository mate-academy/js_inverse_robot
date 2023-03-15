'use strict';

/*
 * @param {object} robot
 *
 * @return {object}
*/

function inverseRobot(robot) {
  // write code here
  const newRobot = {};

  for (const elem in robot) {
    if (robot[elem] in newRobot) {
      return null;
    } else {
      newRobot[robot[elem]] = elem;
    }
  }

  return newRobot;
}

module.exports = inverseRobot;
