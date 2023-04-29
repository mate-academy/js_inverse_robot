'use strict';

/*
 * @param {object} robot
 *
 * @return {object}
*/

function inverseRobot(robot) {
  const robotCorrect = {};

  for (const [key, value] of Object.entries(robot)) {
    if (robotCorrect.hasOwnProperty(value)) {
      return null;
    }

    robotCorrect[value] = key;
  }

  return robotCorrect;
}

module.exports = inverseRobot;
