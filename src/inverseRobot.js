'use strict';

/*
 * @param {object} robot
 *
 * @return {object}
*/

function inverseRobot(robot) {
  const rightRobot = {};

  for (const organ in robot) {
    if (rightRobot.hasOwnProperty(robot[organ])) {
      return null;
    }

    rightRobot[robot[organ]] = organ;
  }

  return rightRobot;
}

module.exports = inverseRobot;
