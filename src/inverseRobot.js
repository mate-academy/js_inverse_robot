'use strict';

/*
 * @param {object} robot
 *
 * @return {object}
 */

function inverseRobot(robot) {
  const inversedRobot = {};

  for (const key in robot) {
    const inversedRobotKeys = Object.keys(inversedRobot);

    if (inversedRobotKeys.includes(robot[key])) {
      return null;
    }

    inversedRobot[robot[key]] = key;
  }

  return inversedRobot;
}

module.exports = inverseRobot;
