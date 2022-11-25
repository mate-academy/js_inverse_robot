'use strict';

/*
 * @param {object} robot
 *
 * @return {object}
*/

function inverseRobot(robot) {
  const robots = {};

  for (const key in robot) {
    if (robots.hasOwnProperty(robot[key])) {
      return null;
    }

    robots[robot[key]] = key;
  }

  return robots;
}

module.exports = inverseRobot;
