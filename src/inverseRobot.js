'use strict';

/*
 * @param {object} robot
 *
 * @return {object}
*/

function inverseRobot(robot) {
  // write code here

  const reversed = {};
  const check = {};

  for (const key in robot) {
    const value = robot[key];

    if (check[value] !== undefined) {
      return null;
    }

    reversed[value] = key;

    check[value] = key;
  }

  return reversed;
}

module.exports = inverseRobot;
