'use strict';

/*
 * @param {object} robot
 *
 * @return {object}
*/

function inverseRobot(robot) {
  // write code here
  const fixedRobot = {};

  for (const robotProperty in robot) {
    for (const fixedRobotProperty in fixedRobot) {
      if (fixedRobotProperty === robot[robotProperty]) {
        return null;
      }
    }
    fixedRobot[robot[robotProperty]] = robotProperty;
  }

  return fixedRobot;
}

module.exports = inverseRobot;
