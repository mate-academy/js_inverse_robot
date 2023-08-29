'use strict';

/*
 * @param {object} robot
 *
 * @return {object}
*/

function inverseRobot(robot) {
  const repair = {};

  for (const key in robot) {
    const value = robot[key];

    if (repair[value]) {
      return null;
    }

    repair[value] = key;
  }

  return repair;
}

module.exports = inverseRobot;
