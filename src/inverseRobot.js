'use strict';

/*
 * @param {object} robot
 *
 * @return {object}
*/

function inverseRobot(robot) {
  const normalRobot = {};

  for (const fakeKey in robot) {
    const trueKey = robot[fakeKey];

    if (normalRobot[trueKey]) {
      return null;
    }

    normalRobot[trueKey] = fakeKey;
  }

  return normalRobot;
}

module.exports = inverseRobot;
