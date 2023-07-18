'use strict';

/*
 * @param {object} robot
 *
 * @return {object}
 */

function inverseRobot(robot) {
  const resultRobot = {};

  for (const [indx, key] of Object.entries(robot)) {
    if (resultRobot[key]) {
      return null;
    }

    resultRobot[key] = indx;
  }

  return resultRobot;
}

module.exports = inverseRobot;
