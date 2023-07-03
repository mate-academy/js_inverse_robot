'use strict';

/*
 * @param {object} robot
 *
 * @return {object}
*/

function inverseRobot(robot) {
  const swappedObj = {};
  const seenValues = new Set();

  for (const key in robot) {
    const value = robot[key];

    if (seenValues.has(value)) {
      return null;
    }
    swappedObj[value] = key;
    seenValues.add(value);
  }

  return swappedObj;
}

module.exports = inverseRobot;
