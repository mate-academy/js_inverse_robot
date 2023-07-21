'use strict';

/*
 * @param {object} robot
 *
 * @return {object}
 */

function inverseRobot(robot) {
  const repairedRobot = {};

  for (const key in robot) {
    const part = robot[key];

    if (repairedRobot.hasOwnProperty(part)) {
      return null;
    }
    repairedRobot[part] = key;
  }

  return repairedRobot;
}

module.exports = inverseRobot;
