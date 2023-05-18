'use strict';

/*
 * @param {object} robot
 *
 * @return {object}
*/

function inverseRobot(robot) {
  const correctRobot = {};
  const keys = Object.values(robot);
  const values = Object.keys(robot);

  for (let i = 0; i < values.length; i++) {
    const key = keys[i];
    const value = values[i];

    if (correctRobot[key]) {
      return null;
    }

    correctRobot[key] = value;
  }

  return correctRobot;
}

module.exports = inverseRobot;
