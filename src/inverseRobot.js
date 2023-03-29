'use strict';

/*
 * @param {object} robot
 *
 * @return {object}
*/

function inverseRobot(robot) {
  // write code here
  const fixRobot = {};

  for (const key in robot) {
    const fixKey = robot[key];
    const fixValue = key;

    if (fixRobot.hasOwnProperty(fixKey)) {
      return null;
    }

    fixRobot[fixKey] = fixValue;
  }

  return fixRobot;
}

module.exports = inverseRobot;
