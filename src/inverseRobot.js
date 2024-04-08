'use strict';

/*
 * @param {object} robot
 *
 * @return {object}
*/

function inverseRobot(robot) {
  // write code here
  const invertedRobot = {};

  for (const key in robot) {
    if (invertedRobot.hasOwnProperty(robot[key])) {
      return null;
    }

    invertedRobot[robot[key]] = key;
  }

  return invertedRobot;
}
module.exports = inverseRobot;
