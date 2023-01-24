'use strict';

/*
 * @param {object} robot
 *
 * @return {object}
*/

function inverseRobot(robot) {
  const newRobot = {};
  const robotLength = Object.keys(robot).length;
  let newRobotLength = 0;

  for (const key in robot) {
    newRobot[robot[key]] = key;
  }

  newRobotLength = Object.keys(newRobot).length;

  if (robotLength === newRobotLength) {
    return newRobot;
  }

  return null;
}

module.exports = inverseRobot;
