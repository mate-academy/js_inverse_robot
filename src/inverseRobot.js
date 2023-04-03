'use strict';

/*
 * @param {object} robot
 *
 * @return {object}
*/

function inverseRobot(robot) {
  const transposedRobot = {};

  for (const [key, value] of Object.entries(robot)) {
    if (transposedRobot[value]) {
      return null;
    }

    transposedRobot[value] = key;
  }

  return transposedRobot;
}

module.exports = inverseRobot;
