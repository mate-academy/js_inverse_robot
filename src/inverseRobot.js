'use strict';

/*
 * @param {object} robot
 *
 * @return {object}
*/

function inverseRobot(robot) {
  const robotKeys = Object.keys(robot);
  const robotValues = Object.values(robot);
  const inversedRobotObj = {};

  for (let i = 0; i < robotKeys.length; i++) {
    if (inversedRobotObj.hasOwnProperty(robotValues[i])) {
      return null;
    }

    inversedRobotObj[robotValues[i]] = robotKeys[i];
  }

  return inversedRobotObj;
}

module.exports = inverseRobot;
