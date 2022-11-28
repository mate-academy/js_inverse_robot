'use strict';

/*
 * @param {object} robot
 *
 * @return {object}
*/

function inverseRobot(robot) {
  const inversedRobot = {};
  const keys = [];

  for (const key in robot) {
    if (keys.includes(robot[key])) {
      return null;
    }
    keys.push(robot[key]);
    inversedRobot[robot[key]] = key;
  }

  return inversedRobot;
}

module.exports = inverseRobot;
