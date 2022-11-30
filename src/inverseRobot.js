'use strict';

/*
 * @param {object} robot
 *
 * @return {object}
*/

function inverseRobot(robot) {
  const transpositionRobot = {};

  for (const key in robot) {
    if (transpositionRobot[robot[key]]) {
      return null;
    }

    transpositionRobot[robot[key]] = key;
  }

  return transpositionRobot;
}

module.exports = inverseRobot;
