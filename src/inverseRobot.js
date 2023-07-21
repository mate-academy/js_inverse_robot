'use strict';

/*
 * @param {object} robot
 *
 * @return {object}
*/

function inverseRobot(robot) {
  const resultRobot = {};

  for (const property in robot) {
    const resultRobotValue = property;
    const resultRobotKey = robot[property];

    if (resultRobot.hasOwnProperty(resultRobotKey)) {
      return null;
    }
    resultRobot[resultRobotKey] = resultRobotValue;
  }

  return resultRobot;
}

module.exports = inverseRobot;
