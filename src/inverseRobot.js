'use strict';

/*
 * @param {object} robot
 *
 * @return {object}
*/

function inverseRobot(robot) {
  const newRobot = {};

  for (const key in robot) {
    const newKey = robot[key];

    if (!newRobot[newKey]) {
      newRobot[newKey] = key;
    } else {
      return null;
    }
  }

  return newRobot;
}

module.exports = inverseRobot;
