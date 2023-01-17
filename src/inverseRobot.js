'use strict';

/*
 * @param {object} robot
 *
 * @return {object}
*/

function inverseRobot(robot) {
  const newRobot = {};

  for (const key in robot) {
    if (robot[key] in newRobot) {
      return null;
    } else {
      newRobot[robot[key]] = key;
    }
  }

  return newRobot;
}

module.exports = inverseRobot;
