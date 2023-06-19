'use strict';

/*
 * @param {object} robot
 *
 * @return {object}
 */

function inverseRobot(robot) {
  const output = {};

  for (const key in robot) {
    if (output.hasOwnProperty(robot[key])) {
      return null;
    }

    output[robot[key]] = key;
  }

  return output;
}

module.exports = inverseRobot;
