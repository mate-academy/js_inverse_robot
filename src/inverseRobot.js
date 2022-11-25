'use strict';

/*
 * @param {object} robot
 *
 * @return {object}
*/

function inverseRobot(robot) {
  const InverseRobot = {};

  for (const key in robot) {
    if (!InverseRobot.hasOwnProperty(robot[key])) {
      InverseRobot[robot[key]] = key;
    } else {
      return null;
    }
  }

  return InverseRobot;
}

module.exports = inverseRobot;
