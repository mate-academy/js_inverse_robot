'use strict';

/*
 * @param {object} robot
 *
 * @return {object}
*/

function inverseRobot(robot) {
  const ReversedRobot = {};

  for (const key in robot) {
    const value = robot[key];

    if (ReversedRobot.hasOwnProperty(value)) {
      return null;
    }
    ReversedRobot[value] = key;
  }

  return ReversedRobot;
}

module.exports = inverseRobot;
