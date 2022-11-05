'use strict';

/*
 * @param {object} robot
 *
 * @return {object}
*/

function inverseRobot(robot) {
  const fixedRobots = {};

  for (const key in robot) {
    const robotValues = robot[key];

    if (fixedRobots.hasOwnProperty(robotValues)) {
      return null;
    }

    fixedRobots[robotValues] = key;
  }

  return fixedRobots;
}

module.exports = inverseRobot;
