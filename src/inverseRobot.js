'use strict';

/*
 * @param {object} robot
 *
 * @return {object}
*/

function inverseRobot(robot) {
  const repairedRobot = {};

  for (const key in robot) {
    const valueOfRobot = robot[key];

    if (repairedRobot.hasOwnProperty(valueOfRobot)) {
      return null;
    }

    repairedRobot[valueOfRobot] = key;
  }

  return repairedRobot;
}

module.exports = inverseRobot;
