'use strict';

/*
 * @param {object} robot
 *
 * @return {object}
*/

function inverseRobot(robot) {
  const fixedRobot = {};
  const entries = Object.entries(robot);

  for (const param of entries) {
    if (fixedRobot[param[1]]) {
      return null;
    }
    fixedRobot[param[1]] = param[0];
  }

  return fixedRobot;
}

module.exports = inverseRobot;
