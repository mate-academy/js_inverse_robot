'use strict';

/*
 * @param {object} robot
 *
 * @return {object}
*/

function inverseRobot(robot) {
  const newRobot = {};

  for (const param in robot) {
    if (newRobot.hasOwnProperty([robot[param]])) {
      return null;
    }
    newRobot[robot[param]] = param;
  }

  return newRobot;
}

module.exports = inverseRobot;
