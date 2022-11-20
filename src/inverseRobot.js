/* eslint-disable no-console */
'use strict';

/*
 * @param {object} robot
 *
 * @return {object}
*/

function inverseRobot(robot) {
  // write code here
  const inverstedRobot = {};

  for (const key in robot) {
    if (inverstedRobot.hasOwnProperty(robot[key])) {
      return null;
    }

    inverseRobot[robot[key]] = key;
  }

  return inverseRobot;
}

module.exports = inverseRobot;
