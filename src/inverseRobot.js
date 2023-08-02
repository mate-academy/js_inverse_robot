'use strict';

/*
 * @param {object} robot
 *
 * @return {object}
*/

function inverseRobot(robot) {
  const copyRobot = {};

  for (const key in robot) {
    if (robot[key]) {
      const currentValue = robot[key];

      if (copyRobot.hasOwnProperty(currentValue)) {
        return null;
      }

      copyRobot[currentValue] = key;
    }
  }

  return copyRobot;
}

module.exports = inverseRobot;
