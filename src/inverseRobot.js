'use strict';

/*
 * @param {object} robot
 *
 * @return {object}
*/

function inverseRobot(robot) {
  const rebuiltRobot = {};

  for (const key in robot) {
    if (rebuiltRobot.hasOwnProperty(robot[key])) {
      return null;
    }
    rebuiltRobot[robot[key]] = key;
  }

  return rebuiltRobot;
}

module.exports = inverseRobot;
