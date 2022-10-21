'use strict';

/*
 * @param {object} robot
 *
 * @return {object}
*/

function inverseRobot(robot) {
  const reversedRobot = {};

  for (const keys in robot) {
    if (reversedRobot.hasOwnProperty([robot[keys]])) {
      return null;
    }
    reversedRobot[robot[keys]] = keys;
  }

  return reversedRobot;
}

module.exports = inverseRobot;
