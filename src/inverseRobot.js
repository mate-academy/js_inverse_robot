'use strict';

/*
 * @param {object} robot
 *
 * @return {object}
*/

function inverseRobot(robot) {
  const inverted = {};

  for (const key in robot) {
    if (inverted.hasOwnProperty(robot[key])) {
      return null;
    }
    inverted[robot[key]] = key;
  }

  return inverted;
}

module.exports = inverseRobot;
