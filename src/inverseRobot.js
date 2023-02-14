'use strict';

/*
 * @param {object} robot
 *
 * @return {object}
*/

function inverseRobot(robot) {
  // write code here

  const inverse = {};

  for (const key in robot) {
    inverse[robot[key]] = key;
  }

  if (Object.keys(inverse).length !== Object.keys(robot).length) {
    return null;
  }

  return inverse;
}

module.exports = inverseRobot;
