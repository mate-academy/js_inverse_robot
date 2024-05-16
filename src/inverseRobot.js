'use strict';

/*
 * @param {object} robot
 *
 * @return {object}
*/

function inverseRobot(robot) {
  const normalRobot = {};

  for (const key in robot) {
    const normalKey = robot[key];
    const normalValue = key;

    if (normalRobot[normalKey]) {
      return null;
    }

    normalRobot[normalKey] = normalValue;
  }

  return normalRobot;
}

module.exports = inverseRobot;
