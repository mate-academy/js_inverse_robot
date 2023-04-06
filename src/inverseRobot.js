'use strict';

/*
 * @param {object} robot
 *
 * @return {object}
*/

function inverseRobot(robot) {
  const newRobot = {};
  const repeat = {};

  for (const key in robot) {
    const value = robot[key];

    if (repeat[value]) {
      return null;
    }

    newRobot[value] = key;
    repeat[value] = true;
  }

  return newRobot;
}

module.exports = inverseRobot;
