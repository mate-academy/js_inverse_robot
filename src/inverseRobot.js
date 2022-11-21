'use strict';

/*
 * @param {object} robot
 *
 * @return {object}
*/

function inverseRobot(robot) {
  const fixedRobot = {};

  for (const [value, key] of Object.entries(robot)) {
    if (!fixedRobot[key]) {
      fixedRobot[key] = value;
    } else {
      return null;
    }
  }

  return fixedRobot;
}

module.exports = inverseRobot;
