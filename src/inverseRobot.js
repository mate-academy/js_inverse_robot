'use strict';

/*
 * @param {object} robot
 *
 * @return {object}
*/

function inverseRobot(robot) {
  // write code here
  const robot1 = {};

  for (const key in robot) {
    const value = robot[key];

    if (Object.values(robot).lastIndexOf(value) !== Object.keys(robot).lastIndexOf(key)) {
      return null;
    }

    robot1[value] = key;
  }

  return robot1;
}

module.exports = inverseRobot;
