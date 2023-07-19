'use strict';

/*
 * @param {object} robot
 *
 * @return {object | null}
*/

function inverseRobot(robot) {
  const fixed = {};
  const valuesSet = new Set();

  for (const key in robot) {
    const value = robot[key];

    if (valuesSet.has(value)) {
      return null;
    }

    fixed[value] = key;
    valuesSet.add(value);
  }

  return fixed;
}

module.exports = inverseRobot;
