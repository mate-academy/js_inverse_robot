'use strict';

/*
 * @param {object} robot
 *
 * @return {object}
*/

function inverseRobot(robot) {
  const inverted = {};

  for (const key in robot) {
    const value = robot[key];

    if (inverted[value]) {
      return null;
    }
    inverted[value] = key;
  }

  return inverted;
}

module.exports = inverseRobot;
