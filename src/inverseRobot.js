'use strict';

/*
 * @param {object} robot
 *
 * @return {object}
 */

function inverseRobot(robot) {
  const values = Object.values(robot);

  for (let i = 0; i < values.length; i++) {
    for (let j = i + 1; j < values.length; j++) {
      if (values[i] === values[j]) {
        return null;
      }
    }
  }

  const newRobot = Object.entries(robot).map(([a, b]) => [b, a]);
  const end = Object.fromEntries(newRobot);

  return end;
}

module.exports = inverseRobot;
