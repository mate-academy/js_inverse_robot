'use strict';

/*
 * @param {object} robot
 *
 * @return {object}
*/

function inverseRobot(robot) {
  const copyRobot = {};

  for (const key in robot) {
    const currentValue = robot[key];

    if (copyRobot.hasOwnProperty(currentValue)) {
      return null;
    }

    copyRobot[currentValue] = key;
  }

  return copyRobot;
}

module.exports = inverseRobot;
