'use strict';

/*
 * @param {object} robot
 *
 * @return {object}
 */

function inverseRobot(robot) {
  const keys = Object.keys(robot);

  for (let i = 0; i < keys.length; i++) {
    for (let j = i + 1; j < keys.length; j++) {
      if (robot[keys[i]] === robot[keys[j]]) {
        return null;
      }
    }
  }

  const newRobot = Object.entries(robot).map(([a, b]) => [b, a]);
  const end = Object.fromEntries(newRobot);

  return end;
}

module.exports = inverseRobot;
