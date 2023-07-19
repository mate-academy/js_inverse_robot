'use strict';

/*
 * @param {object} robot
 *
 * @return {object}
*/

function inverseRobot(robot) {
  const properRobotKeys = Object.values(robot);
  const properRobotValues = Object.keys(robot);
  let properRobot = {};

  for (let i = 0; i < properRobotKeys.length; i++) {
    const robotValue = properRobotValues[i];
    const robotKey = properRobotKeys[i];

    if (properRobot.hasOwnProperty(robotKey)) {
      return null;
    }

    properRobot = {
      ...properRobot,
      [robotKey]: robotValue,
    };
  }

  return properRobot;
}

module.exports = inverseRobot;
