'use strict';

/*
 * @param {object} robot
 *
 * @return {object}
*/

function inverseRobot(robot) {
  const fixedRobot = {};

  for (const property in robot) {
    const fixedRobotKey = robot[property];
    const fixedRobotValue = property;

    if (fixedRobot[fixedRobotKey]) {
      return null;
    }

    fixedRobot[fixedRobotKey] = fixedRobotValue;
  }

  return fixedRobot;
}

module.exports = inverseRobot;
