'use strict';

/*
 * @param {object} robot
 *
 * @return {object}
*/

function inverseRobot(robot) {
  const lengthOfRobotObj = Object.keys(robot).length;
  const clone = {};
  let lengthOfCloneObj = 0;

  for (const value in robot) {
    clone[robot[value]] = value;
  }

  lengthOfCloneObj = Object.keys(clone).length;

  if (lengthOfCloneObj !== lengthOfRobotObj) {
    return null;
  }

  return clone;
}

module.exports = inverseRobot;
