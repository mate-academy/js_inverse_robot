'use strict';

/*
 * @param {object} robot
 *
 * @return {object}
*/

function inverseRobot(robot) {
  const robot1 = {};

  for (const [a, b] of Object.entries(robot)) {
    if (robot1[b]) {
      return null;
    }
    robot1[b] = a;
  }

  return robot1;
}

module.exports = inverseRobot;
