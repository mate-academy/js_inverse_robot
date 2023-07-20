'use strict';

/*
 * @param {object} robot
 *
 * @return {object}
*/

function inverseRobot(robot) {
  const InvRobot = {};

  for (const key in robot) {
    if (InvRobot.hasOwnProperty(robot[key])) {
      return null;
    }

    InvRobot[robot[key]] = key;
  }

  return InvRobot;
}
module.exports = inverseRobot;
