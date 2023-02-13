'use strict';

/*
 * @param {object} robot
 *
 * @return {object}
*/

function inverseRobot(robot) {
  const inversedRobot = {};

  for (const [value, key] of Object.entries(robot)) {
    if (key in inversedRobot) {
      return null;
    }

    inversedRobot[key] = value;
  }

  return inversedRobot;
}

module.exports = inverseRobot;
