'use strict';

/*
 * @param {object} robot
 *
 * @return {object}
*/

function inverseRobot(robot) {
  const repairedRobot = {};

  for (const key in robot) {
    const objectValue = robot[key];

    if (repairedRobot.hasOwnProperty(objectValue)) {
      return null;
    }

    repairedRobot[objectValue] = key;
  }

  return repairedRobot;
}

module.exports = inverseRobot;
