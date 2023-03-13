'use strict';

/*
 * @param {object} robot
 *
 * @return {object}
*/

function inverseRobot(robot) {
  const repairedRobot = {};

  for (const key in robot) {
    const value = robot[key];

    if (repairedRobot.hasOwnProperty(value)) {
      return null;
    }

    repairedRobot[value] = key;
  }

  return repairedRobot;
}

module.exports = inverseRobot;
