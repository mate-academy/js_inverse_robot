'use strict';

/*
 * @param {object} robot
 *
 * @return {object}
*/

function inverseRobot(robot) {
  const inversedRobotObj = {};

  for (const key in robot) {
    const value = robot[key];

    if (inversedRobotObj.hasOwnProperty(value)) {
      return null;
    }

    inversedRobotObj[value] = key;
  }

  return inversedRobotObj;
}

module.exports = inverseRobot;
