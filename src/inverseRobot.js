'use strict';

/*
 * @param {object} robot
 *
 * @return {object}
*/

function inverseRobot(robot) {
  const inversedRobot = {};

  for (const key in robot) {
    const inversedKey = robot[key];

    if (inversedRobot[inversedKey]) {
      return null;
    }

    inversedRobot[inversedKey] = key;
  }

  return inversedRobot;
}

module.exports = inverseRobot;
