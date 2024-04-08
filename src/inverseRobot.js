'use strict';

/*
 * @param {object} robot
 *
 * @return {object}
*/

function inverseRobot(robot) {
  const invers = {};

  for (const key in robot) {
    const value = robot[key];

    if (invers[value]) {
      return null;
    }

    invers[value] = key;
  }

  return invers;
}
module.exports = inverseRobot;
