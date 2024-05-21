'use strict';

/*
 * @param {object} robot
 *
 * @return {object}
*/

function inverseRobot(robot) {
  const correctedRobots = {};

  for (const key in robot) {
    if (correctedRobots[robot[key]]) {
      return null;
    }
    correctedRobots[robot[key]] = key;
  }

  return correctedRobots;
}

module.exports = inverseRobot;
