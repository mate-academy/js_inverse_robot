'use strict';

/*
 * @param {object} robot
 *
 * @return {object}
*/

function inverseRobot(robot) {
  const newRobot = {};

  for (const key in robot) {
    const property = [robot[key]];

    if (!newRobot[property]) {
      newRobot[property] = key;
      continue;
    }

    return null;
  }

  return newRobot;
}

module.exports = inverseRobot;
