"use strict";

/*
 * @param {object} robot
 *
 * @return {object}
 */
function inverseRobot(robot) {
  const robotFinal = {};

  for (const [key, value] of Object.entries(robot)) {
    if (robotFinal.hasOwnProperty(value)) {
      return null;
    }

    robotFinal[value] = key;
  }

  return robotFinal;
}

module.exports = inverseRobot;
