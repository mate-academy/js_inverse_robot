'use strict';

/*
 * @param {object} robot
 *
 * @return {object}
*/

function inverseRobot(robot) {
  const revRobot = {};

  for (const key in robot) {
    if (revRobot.hasOwnProperty([robot[key]])) {
      return null;
    }
    revRobot[robot[key]] = key;
  }

  return revRobot;
}

module.exports = inverseRobot;
