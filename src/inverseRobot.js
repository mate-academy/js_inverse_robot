'use strict';

/*
 * @param {object} robot
 *
 * @return {object}
*/

function inverseRobot(robot) {
  const inversRobot = {};

  for (const i in robot) {
    if (robot[i] in inversRobot) {
      return null;
    }
    inversRobot[robot[i]] = i;
  }

  return inversRobot;
}

module.exports = inverseRobot;
