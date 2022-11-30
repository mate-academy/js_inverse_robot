'use strict';

/*
 * @param {object} robot
 *
 * @return {object}
*/

function inverseRobot(robot) {
  const rewers = {};

  for (const key in robot) {
    rewers[robot[key]] = key;
  }

  if (Object.keys(rewers).length !== Object.keys(robot).length) {
    return null;
  }

  return rewers;
}

module.exports = inverseRobot;
