'use strict';

/*
 * @param {object} robot
 *
 * @return {object}
*/

function inverseRobot(robot) {
  const result = {};
  const check = Object.values(robot);

  for (let i = 0; i < check.length; i++) {
    if (check.indexOf(check[i]) !== i) {
      return null;
    }
  }

  for (const key in robot) {
    const value = robot[key];

    result[value] = key;
  }

  return result;
}

module.exports = inverseRobot;
