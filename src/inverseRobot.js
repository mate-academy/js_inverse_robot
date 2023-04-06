'use strict';

/*
 * @param {object} robot
 *
 * @return {object}
*/

function inverseRobot(robot) {
  // write code here
  const inversedRobot = {};

  for (const [key, value] of Object.entries(robot)) {
    if (inversedRobot[value] !== undefined) {
      return null;
    } else {
      inversedRobot[value] = key;
    }
  }

  return inversedRobot;
}

module.exports = inverseRobot;
