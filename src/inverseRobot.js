'use strict';

/*
 * @param {object} robot
 *
 * @return {object}
*/

function inverseRobot(robot) {
  // write code here
  const copy = {};

  for (const key in robot) {
    const value = robot[key];

    if (value in copy) {
      return null;
    }

    copy[value] = key;
  }

  return copy;
}

module.exports = inverseRobot;
