'use strict';

/*
 * @param {object} robot
 *
 * @return {object}
*/

function inverseRobot(robot) {
  const ReparedRobot = {};

  for (const key in robot) {
    if (ReparedRobot[robot[key]]) {
      return null;
    }
    ReparedRobot[robot[key]] = key;
  }

  return ReparedRobot;
}

module.exports = inverseRobot;
