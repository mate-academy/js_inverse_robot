'use strict';

/**
 * @param {object} robot
 * @return {object | null}
 */
function inverseRobot(robot) {
  const inversedRobot = {};

  for (const key in robot) {
    if (inversedRobot.hasOwnProperty(robot[key])) {
      return null;
    }
    inversedRobot[robot[key]] = key;
  }

  return inversedRobot;
}

module.exports = inverseRobot;
