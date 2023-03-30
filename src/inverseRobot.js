'use strict';

/*
 * @param {object} robot
 *
 * @return {object}
*/

function inverseRobot(robot) {
  const cloneRobot = {};

  for (const key in robot) {
    if (robot[key] in cloneRobot) {
      return null;
    }

    cloneRobot[robot[key]] = key;
  }

  return cloneRobot;
}

module.exports = inverseRobot;
