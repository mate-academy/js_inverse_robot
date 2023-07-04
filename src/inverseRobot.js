'use strict';

/*
 * @param {object} robot
 *
 * @return {object}
*/

function inverseRobot(robot) {
  const robot1 = {};

  for (const key in robot) {
    const newkey = robot[key];

    if (!robot1[newkey]) {
      robot1[newkey] = key;
    } else {
      return null;
    }
  }

  return robot1;
}

module.exports = inverseRobot;
