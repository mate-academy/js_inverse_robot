'use strict';

/*
 * @param {object} robot
 *
 * @return {object}
*/

function inverseRobot(robot) {
  // write code here
  const inversRobot = {};

  for (const key in robot) {
    if (inversRobot.hasOwnProperty(robot[key])) {
      return null;
    }
    inversRobot[robot[key]] = key;
  }

  return inversRobot;
}

module.exports = inverseRobot;
