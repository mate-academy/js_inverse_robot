'use strict';

/*
 * @param {object} robot
 *
 * @return {object}
*/

function inverseRobot(robot) {
  const robot1 = {};

  for (const key in robot) {
    robot1[robot[key]] = key;
  }

  if (Object.keys(robot1).length !== Object.keys(robot).length) {
    return null;
  }

  return robot1;
}

module.exports = inverseRobot;
