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

    if (inverted[value] !== undefined) {
      // if a value is repeated, return null
      return null;
    }
    inverted[value] = key;
  }

  return inverted;
}

module.exports = inverseRobot;
