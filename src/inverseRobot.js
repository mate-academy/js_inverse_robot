'use strict';

/*
 * @param {object} robot
 *
 * @return {object}
*/

function inverseRobot(robot) {
  const resultInverse = {};
  const seenValues = new Set();

  for (const key in robot) {
    if (robot.hasOwnProperty(key)) {
      const value = robot[key];

      if (seenValues.has(value)) {
        return null;
      }

      seenValues.add(value);
      resultInverse[value] = key;
    }
  }

  return resultInverse;
}

module.exports = inverseRobot;
