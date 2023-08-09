'use strict';

/*
 * @param {object} robot
 *
 * @return {object}
*/

function inverseRobot(robot) {
  const correctedRobot = {};
  const robotValues = Object.values(robot);

  // Check if values are not repeated
  for (const value of robotValues) {
    if (robotValues.indexOf(value) !== robotValues.lastIndexOf(value)) {
      return null;
    }
  }

  // Change keys and values on places
  for (const key in robot) {
    const robotValue = robot[key];

    correctedRobot[robotValue] = key;
  }

  return correctedRobot;
}

module.exports = inverseRobot;
