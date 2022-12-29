'use strict';

/*
 * @param {object} robot
 *
 * @return {object}
*/

function inverseRobot(robot) {
  const robotInverso = {};

  for (const value in robot) {
    const robotValue = robot[value];

    if (robotInverso.hasOwnProperty(robotValue)) {
      return null;
    }

    robotInverso[robotValue] = value;
  }

  return robotInverso;
}

module.exports = inverseRobot;
