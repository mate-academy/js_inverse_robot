'use strict';

/*
 * @param {object} robot
 *
 * @return {object}
*/

function inverseRobot(robot) {
  const invers = {};

  for (const key in robot) {
    if (invers.hasOwnProperty(robot[key])) {
      return null;
    }

    invers[robot[key]] = key;
  }

  return invers;
}

module.exports = inverseRobot;
