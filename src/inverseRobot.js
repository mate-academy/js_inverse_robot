'use strict';

/*
 * @param {object} robot
 *
 * @return {object}
*/

function inverseRobot(robot) {
  // write code here
  const fixedRobot = {};

  for (const [key, value] of Object.entries(robot)) {
    if (fixedRobot[value] !== undefined) {
      return null;
    }
    fixedRobot[value] = key;
  }

  return fixedRobot;
}

module.exports = inverseRobot;
