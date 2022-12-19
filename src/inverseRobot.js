'use strict';

/*
 * @param {object} robot
 *
 * @return {object}
*/

function inverseRobot(robot) {
  const situsInversus = {};

  for (const key in robot) {
    const value = robot[key];

    if (situsInversus.hasOwnProperty(value)) {
      return null;
    }

    situsInversus[value] = key;
  }

  return situsInversus;
}

module.exports = inverseRobot;
