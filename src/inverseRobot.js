'use strict';

/*
 * @param {object} robot
 *
 * @return {object}
*/

function inverseRobot(robot) {
  const correctedRobot = {};

  // Check if keys are not repeated and change keys and values on places
  for (const key in robot) {
    const robotValue = robot[key];

    if (correctedRobot[robotValue]) {
      return null;
    }

    correctedRobot[robotValue] = key;
  }

  return correctedRobot;
}

module.exports = inverseRobot;
