'use strict';

/*
 * @param {object} robot
 *
 * @return {object}
*/

function inverseRobot(robot) {
  const fixedRobot = {};

  for (const key in robot) {
    const value = robot[key];

    if (fixedRobot.hasOwnProperty(value)) {
      return null;
    }

    fixedRobot[robot[key]] = key;
  }

  return fixedRobot;
}

module.exports = inverseRobot;
