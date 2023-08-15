'use strict';

/*
 * @param {object} robot
 *
 * @return {object}
*/

function inverseRobot(robot) {
  const inversedResult = {};
  const seenValues = new Set();

  for (const key in robot) {
    const value = robot[key];

    if (seenValues.has(value)) {
      return null;
    }

    seenValues.add(value);
    inversedResult[value] = key;
  }

  return inversedResult;
}

module.exports = inverseRobot;
