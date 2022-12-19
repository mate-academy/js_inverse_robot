'use strict';

/*
 * @param {object} robot
 *
 * @return {object}
*/

function inverseRobot(robot) {
  const newRobot = {};
  const arrKeys = Object.keys(robot);
  const arrValues = Object.values(robot);

  for (let i = 0; i < arrKeys.length; i++) {
    const newRobotValues = arrKeys[i];
    const newRobotKeys = arrValues[i];

    if (newRobot.hasOwnProperty(newRobotKeys)) {
      return null;
    }

    newRobot[newRobotKeys] = newRobotValues;
  }

  return newRobot;
}

module.exports = inverseRobot;
