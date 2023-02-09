'use strict';

/*
 * @param {object} robot
 *
 * @return {object}
*/

function inverseRobot(robot) {
  const robot2 = {};

  for (const el in robot) {
    if (robot[el] in robot2) {
      return null;
    }

    robot2[robot[el]] = el;
  }

  return robot2;
}

module.exports = inverseRobot;
