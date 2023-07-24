'use strict';

/*
 * @param {object} robot
 *
 * @return {object}
*/

function inverseRobot(robot) {
  const repairedRobot = {};

  for (const value in robot) {
    const key = robot[value];

    if (repairedRobot.hasOwnProperty(key)) {
      return null;
    }
    repairedRobot[key] = value;
  }

  return repairedRobot;
}
module.exports = inverseRobot;
