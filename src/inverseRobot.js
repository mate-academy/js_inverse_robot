'use strict';

/*
 * @param {object} robot
 *
 * @return {object}
*/

function inverseRobot(robot) {
  const inputRobot = robot;
  const invertedRobot = {};

  for (const inputRobotKey in inputRobot) {
    const inputRobotValue = inputRobot[inputRobotKey];

    if (invertedRobot[inputRobotValue] !== undefined) {
      return null;
    }

    invertedRobot[inputRobotValue] = inputRobotKey;
  }

  return invertedRobot;
}

module.exports = inverseRobot;
