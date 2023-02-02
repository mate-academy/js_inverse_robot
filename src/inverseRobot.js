'use strict';

/*
 * @param {object} robot
 *
 * @return {object}
*/

function inverseRobot(robot) {
  const inversed = {};

  for (const [value, key] of Object.entries(robot)) {
    if (key in inversed) {
      return null;
    }

    inversed[key] = value;
  }

  return inversed;
}

module.exports = inverseRobot;
