'use strict';

/*
 * @param {object} robot
 *
 * @return {object}
*/

function inverseRobot(robot) {
  const prevValue = new Set();
  const copyRobot = {};

  for (const key in robot) {
    if (robot.hasOwnProperty(key)) {
      const currentValue = robot[key];

      if (prevValue.has(currentValue)) {
        return null;
      }

      copyRobot[currentValue] = key;
      prevValue.add(currentValue);
    }
  }

  return copyRobot;
}

module.exports = inverseRobot;
