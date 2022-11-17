'use strict';

/*
 * @param {object} robot
 *
 * @return {object}
*/

function inverseRobot(robot) {
  const inversedRobot = {};

  for (const key in robot) {
    const newKey = robot[key];

    if (inversedRobot[newKey]) {
      return null;
    }

    inversedRobot[newKey] = key;
  }

  return inversedRobot;
}

module.exports = inverseRobot;
