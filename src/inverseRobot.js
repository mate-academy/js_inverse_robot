'use strict';

/*
 * @param {object} robot
 *
 * @return {object}
*/

function inverseRobot(robot) {
  const valuesOfRobotKeys = Object.keys(robot);
  const robotKeys = Object.values(robot);
  const reparedRobot = {};

  for (let i = 0; i < robotKeys.length; i++) {
    if (reparedRobot.hasOwnProperty(robotKeys[i])) {
      return null;
    }
    reparedRobot[robotKeys[i]] = valuesOfRobotKeys[i];
  }

  return reparedRobot;
}

module.exports = inverseRobot;
