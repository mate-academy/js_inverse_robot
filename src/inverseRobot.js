'use strict';

/*
 * @param {object} robot
 *
 * @return {object}
*/

function inverseRobot(robot) {
  const inverted = {};

  for (const [key, value] of Object.entries(robot)) {
    if (inverted[value] !== undefined) {
      return null;
    }
    inverted[value] = key;
  }

  return inverted;
}

module.exports = inverseRobot;
