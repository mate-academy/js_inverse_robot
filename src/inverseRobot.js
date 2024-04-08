'use strict';

/*
 * @param {object} robot
 *
 * @return {object}
*/
function inverseRobot(robot) {
  const newRobot = {};
  const valuesSet = new Set();

  for (const key in robot) {
    const value = robot[key];

    if (valuesSet.has(value)) {
      return null;
    }

    newRobot[value] = key;
    valuesSet.add(value);
  }

  return newRobot;
}
module.exports = inverseRobot;
