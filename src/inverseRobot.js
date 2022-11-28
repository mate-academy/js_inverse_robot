'use strict';

/*
 * @param {object} robot
 *
 * @return {object}
*/

function inverseRobot(robot) {
  const inversedRobot = {};

  for (const key in robot) {
    if (!(robot[key] in inversedRobot)) {
      inversedRobot[robot[key]] = key;
    } else {
      return null;
    }
  }

  return inversedRobot;
}

module.exports = inverseRobot;
