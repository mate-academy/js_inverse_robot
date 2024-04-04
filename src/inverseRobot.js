/* eslint-disable no-console */

'use strict';

/*
 * @param {object} robot
 *
 * @return {object}
*/

function inverseRobot(robot) {
  // write code here

  const inversedRobot = {};

  for (const key in robot) {
    const keyValue = robot[key];

    if (inversedRobot.hasOwnProperty(keyValue)) {
      return null;
    }

    inversedRobot[keyValue] = key;
  }

  return inversedRobot;
}

module.exports = inverseRobot;
