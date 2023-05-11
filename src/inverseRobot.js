'use strict';

/*
 * @param {object} robot
 *
 * @return {object}
*/

function inverseRobot(robot) {
  const noTranspositionRobot = {};

  for (const key in robot) {
    if (noTranspositionRobot.hasOwnProperty(robot[key])) {
      return null;
    }

    const value = robot[key];

    noTranspositionRobot[value] = key;
  }

  return noTranspositionRobot;
}

module.exports = inverseRobot;
