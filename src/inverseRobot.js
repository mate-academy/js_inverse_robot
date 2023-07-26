'use strict';

/*
 * @param {object} robot
 *
 * @return {object}
*/

function inverseRobot(robot) {
  const inversedRobot = {};

  for (const key in robot) {
    const part = robot[key];

    if (inversedRobot.hasOwnProperty(part)) {
      return null;
    }

    inversedRobot[part] = key;
  }

  return inversedRobot;
}

module.exports = inverseRobot;
