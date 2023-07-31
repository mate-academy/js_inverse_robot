'use strict';

/*
 * @param {object} robot
 *
 * @return {object}
*/

function inverseRobot(robot) {
  const resRobot = {};

  for (const key in robot) {
    if (robot[key] in resRobot) {
      return null;
    }

    resRobot[robot[key]] = key;
  }

  return resRobot;
}

module.exports = inverseRobot;
