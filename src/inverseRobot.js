'use strict';

/*
 * @param {object} robot
 *
 * @return {object}
*/

function inverseRobot(robot) {
  const updatedRobot = {};

  for (const key in robot) {
    if (robot[key] in updatedRobot) {
      return null;
    }

    updatedRobot[robot[key]] = key;
  }

  return updatedRobot;
}

module.exports = inverseRobot;
