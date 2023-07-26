'use strict';

/*
 * @param {object} robot
 *
 * @return {object}
*/

function inverseRobot(robot) {
  const inverseRobotObj = {};

  for (const key in robot) {
    const value = robot[key];

    if (inverseRobotObj[value] !== undefined) {
      return null;
    };

    inverseRobotObj[value] = key;
  }

  return inverseRobotObj;
}

module.exports = inverseRobot;
