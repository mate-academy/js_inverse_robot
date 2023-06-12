'use strict';

/*
 * @param {object} robot
 *
 * @return {object}
*/

function inverseRobot(robot) {
  const rightRobot = {};

  for (const key in robot) {
    if (rightRobot.hasOwnProperty(robot[key])) {
      return null;
    }

    rightRobot[robot[key]] = key;
  }

  return rightRobot;
}

module.exports = inverseRobot;
