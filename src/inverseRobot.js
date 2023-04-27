'use strict';

/*
 * @param {object} robot
 *
 * @return {object}
*/

function inverseRobot(robot) {
  const robotValues = Object.values(robot);
  const robotCorrect = {};

  for (let i = 0; i < robotValues.length; i++) {
    if (robotValues.indexOf(robotValues[i], i + 1) !== -1) {
      return null;
    }
  }

  for (const [key, value] of Object.entries(robot)) {
    robotCorrect[value] = key;
  }

  return robotCorrect;
}

module.exports = inverseRobot;
