'use strict';

/*
 * @param {object} robot
 *
 * @return {object}
*/

function inverseRobot(robot) {
  const result = {};

  for (const prop in robot) {
    const value = robot[prop];

    if (result[value]) {
      return null;
    }

    result[value] = prop;
  }

  return result;
}

module.exports = inverseRobot;
