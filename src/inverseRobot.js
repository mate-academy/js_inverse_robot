'use strict';

/*
 * @param {object} robot
 *
 * @return {object}
*/

function inverseRobot(robot) {
  const inverse = {};

  for (const entry of Object.entries(robot)) {
    if (inverse.hasOwnProperty(entry[1])) {
      return null;
    }

    inverse[entry[1]] = entry[0];
  }

  return inverse;
}

module.exports = inverseRobot;
