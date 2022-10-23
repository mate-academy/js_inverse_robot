'use strict';

/*
 * @param {object} robot
 *
 * @return {object}
*/

function inverseRobot(robot) {
  const newRobot = {};

  for (const keys in robot) {
    if (newRobot.hasOwnProperty([robot[keys]])) {
      return null;
    }
    newRobot[robot[keys]] = keys;
  }

  return newRobot;
}

module.exports = inverseRobot;
