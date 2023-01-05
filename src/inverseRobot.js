'use strict';

/*
 * @param {object} robot
 *
 * @return {object}
*/

function inverseRobot(robot) {
  const newRobot = {};

  for (const key in robot) {
    const prop = robot[key];

    if (newRobot[prop]) {
      return null;
    }

    newRobot[prop] = key;
  }

  return newRobot;
}

module.exports = inverseRobot;
