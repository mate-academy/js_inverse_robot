'use strict';

/*
 * @param {object} robot
 *
 * @return {object}
*/

function inverseRobot(robot) {
  const inversedRobot = {};

  for (const key in robot) {
    inversedRobot[robot[key]] = key;
  }

  if (Object.keys(inversedRobot).length !== Object.keys(robot).length) {
    return null;
  }

  return inversedRobot;
}

module.exports = inverseRobot;
