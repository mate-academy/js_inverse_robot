'use strict';

/*
 * @param {object} robot
 *
 * @return {object}
*/

function inverseRobot(robot) {
  const noTranspositionRobot = {};

  for (const key in robot) {
    if (robot.hasOwnProperty(key)) {
      const value = robot[key];

      if (noTranspositionRobot.hasOwnProperty(value)) {
        return null;
      }
      noTranspositionRobot[value] = key;
    }
  }

  return noTranspositionRobot;
}

module.exports = inverseRobot;
