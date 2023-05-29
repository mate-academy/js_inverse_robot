'use strict';

/*
 * @param {object} robot
 *
 * @return {object}
*/

function inverseRobot(robot) {
  // write code here
  const updateRobot = {};

  for (const key in robot) {
    if (robot[key] in updateRobot) {
      return null;
    }

    updateRobot[robot[key]] = key;
  }

  return updateRobot;
}

module.exports = inverseRobot;
