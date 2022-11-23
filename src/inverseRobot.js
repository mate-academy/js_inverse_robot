'use strict';

/*
 * @param {object} robot
 *
 * @return {object}
 */

function inverseRobot(robot) {
  // write code here
  const revese = {};

  for (const keys in robot) {
    if (revese.hasOwnProperty(robot[keys])) {
      return null;
    }
    revese[robot[keys]] = keys;
  }

  return revese;
}

module.exports = inverseRobot;
