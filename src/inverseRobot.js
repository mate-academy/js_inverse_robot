'use strict';

/*
 * @param {object} robot
 *
 * @return {object}
*/

function inverseRobot(robot) {
  const inversion = {};

  for (const key in robot) {
    if (inversion.hasOwnProperty(robot[key])) {
      return null;
    }
    inversion[robot[key]] = key;
  }

  return inversion;
}

module.exports = inverseRobot;
