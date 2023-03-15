'use strict';

/*
 * @param {object} robot
 *
 * @return {object}
*/

function inverseRobot(robot) {
  // write code here
  const trueRobot = {};

  for (const key in robot) {
    const paramName = robot[key];

    if (robot[key] in trueRobot) {
      return null;
    }

    trueRobot[paramName] = key;
  }

  return trueRobot;
}

module.exports = inverseRobot;
