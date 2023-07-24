'use strict';

/*
 * @param {object} robot
 *
 * @return {object}
*/

function inverseRobot(robot) {
  const reversedRobot = {};
  const valueCount = {};

  for (const key in robot) {
    const value = robot[key];

    reversedRobot[value] = key;
    valueCount[value] = (valueCount[value] || 0) + 1;
  }

  for (const count of Object.values(valueCount)) {
    if (count > 1) {
      return null;
    }
  }

  return reversedRobot;
}

module.exports = inverseRobot;
