'use strict';

/*
 * @param {object} robot
 *
 * @return {object}
*/

function inverseRobot(robot) {
  const situsInversus = {};

  for (const key in robot) {
    if (situsInversus.hasOwnProperty(robot[key])) {
      return null;
    }
    situsInversus[robot[key]] = key;
  }

  return situsInversus;
}

module.exports = inverseRobot;
