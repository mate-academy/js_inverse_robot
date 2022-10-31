'use strict';

/*
 * @param {object} robot
 *
 * @return {object}
*/

function inverseRobot(robot) {
  const robot1 = {};

  for (const key in robot) {
    if (robot1.hasOwnProperty([robot[key]])) {
      return null;
    }
    robot1[robot[key]] = key;
  }

  return robot1;
}

module.exports = inverseRobot;
