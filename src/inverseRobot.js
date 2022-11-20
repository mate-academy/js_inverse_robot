'use strict';

/*
 * @param {object} robot
 *
 * @return {object}
*/

function inverseRobot(robot) {
  if (!robot || robot === {}) {
    return robot;
  }

  const reversedRobot = {};

  for (const key in robot) {
    const actualKey = robot[key];
    const actualValue = key;

    if (reversedRobot[actualKey]) {
      return null;
    }

    reversedRobot[actualKey] = actualValue;
  }

  return reversedRobot;
}

module.exports = inverseRobot;
