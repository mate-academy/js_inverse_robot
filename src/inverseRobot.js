'use strict';

/*
 * @param {object} robot
 *
 * @return {object}
*/

function inverseRobot(robot) {
  const copy = {};

  for (const keys in robot) {
    if (copy.hasOwnProperty(robot[keys])) {
      return null;
    }

    copy[robot[keys]] = keys;
  }

  return copy;
}

module.exports = inverseRobot;
