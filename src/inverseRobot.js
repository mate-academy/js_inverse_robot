'use strict';

/*
 * @param {object} robot
 *
 * @return {object}
*/

function inverseRobot(robot) {
  const fixRobot = {};

  for (const key in robot) {
    const robotValues = robot[key];

    if (fixRobot.hasOwnProperty(robotValues)) {
      return null;
    }

    fixRobot[robot[key]] = key;
  }

  return fixRobot;
}

module.exports = inverseRobot;
