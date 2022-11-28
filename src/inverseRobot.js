'use strict';

/*
 * @param {object} robot
 *
 * @return {object}
 */

function inverseRobot(robot) {
  const values = Object.values(robot);
  const inversedRobot = {};

  for (let i = 0; i < values.length; i++) {
    for (let j = i; j < values.length - i; j++) {
      if (values[i] === values[j + 1]) {
        return null;
      }
    }
  }

  for (const key in robot) {
    inversedRobot[robot[key]] = key;
  }

  return inversedRobot;
}

module.exports = inverseRobot;
