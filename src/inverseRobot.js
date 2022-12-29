'use strict';

/*
 * @param {object} robot
 *
 * @return {object}
*/

function inverseRobot(robot) {
  // write code here
  const repaired = {};

  for (const key in robot) {
    const robotValue = robot[key];

    if (repaired.hasOwnProperty(robotValue)) {
      return null;
    }
    repaired[robotValue] = key;
  }

  return repaired;
}

module.exports = inverseRobot;
