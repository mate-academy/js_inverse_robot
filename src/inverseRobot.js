'use strict';

/*
 * @param {object} robot
 *
 * @return {object}
*/

function inverseRobot(robot) {
  const inversedRobot = {};

  for (const key in robot) {
    const everyKey = robot[key];

    if (everyKey in inversedRobot) {
      return null;
    }

    inversedRobot[everyKey] = key;
  }

  return inversedRobot;
}

module.exports = inverseRobot;
