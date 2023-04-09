/* eslint-disable no-shadow */
'use strict';

/*
 * @param {object} robot
 *
 * @return {object}
 */

function inverseRobot(robot) {
  const reversedRobot = {};

  for (const key in robot) {
    if (reversedRobot[robot[key]] !== undefined) {
      return null;
    }
    reversedRobot[robot[key]] = key;
  }

  return reversedRobot;
}

module.exports = inverseRobot;
