'use strict';

/*
 * @param {object} robot
 *
 * @return {object}
 */

function inverseRobot(robot) {
  const newRobot = Object.entries(robot).map(([a, b]) => [b, a]);

  for (let i = 0; i < newRobot.length - 1; i++) {
    if (newRobot[0][0] === newRobot[i + 1][0]) {
      return null;
    }
  }

  const end = Object.fromEntries(newRobot);

  return end;
}

module.exports = inverseRobot;
