'use strict';

/*
 * @param {object} robot
 *
 * @return {object}
*/

function inverseRobot(robot) {
  const values = (Object.values(robot));

  for (let i = 0; i < values.length; i++) {
    for (let y = i + 1; y < values.length; y++) {
      if (values[i] === values[y]) {
        return null;
      }
    }
  }

  const newRobot = {};

  for (const key in robot) {
    newRobot[robot[key]] = key;
  }

  return newRobot;
}

module.exports = inverseRobot;
