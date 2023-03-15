'use strict';

/*
 * @param {object} robot
 *
 * @return {object}
*/

function inverseRobot(robot) {
  const inversedRobot = {};

  for (const key in robot) {
    const objectValue = robot[key];

    if (inversedRobot.hasOwnProperty(objectValue)) {
      return null;
    }

    inversedRobot[objectValue] = key;
  }

  return inversedRobot;
}

module.exports = inverseRobot;
