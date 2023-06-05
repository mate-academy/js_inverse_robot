'use strict';

/*
 * @param {object} robot
 *
 * @return {object}
*/

function inverseRobot(robot) {
  const robotCorrectedObject = {};
  const swappedValues = {};

  for (const key in robot) {
    if (robot.hasOwnProperty(key)) {
      const value = robot[key];

      if (swappedValues.hasOwnProperty(value)) {
        return null;
      }

      robotCorrectedObject[value] = key;
      swappedValues[value] = true;
    }
  }

  return robotCorrectedObject;
}

module.exports = inverseRobot;
