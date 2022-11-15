'use strict';

/*
 * @param {object} robot
 *
 * @return {object}
*/

function inverseRobot(robot) {
  const revRobot = {};

  for (const key in robot) {
    if (!revRobot[robot[key]]) {
      revRobot[robot[key]] = key;
    } else {
      return null;
    }
  }

  return revRobot;
}

module.exports = inverseRobot;
