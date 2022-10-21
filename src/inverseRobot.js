'use strict';

/*
 * @param {object} robot
 * @param {object} checkObj
 * @return {object}
*/

function inverseRobot(robot) {
  const newRobot = {};

  for (const i in robot) {
    if (newRobot.hasOwnProperty(robot[i])) {
      return null;
    }
    newRobot[robot[i]] = i;
  }

  return newRobot;
}

module.exports = inverseRobot;
