'use strict';

/*
 * @param {object} robot
 *
 * @return {object}
*/

function inverseRobot(robot) {
  const arrayRobotValue = [];
  const newRobotObject = {};

  for (const key in robot) {
    arrayRobotValue.push(robot[key]);
  }

  for (const value of arrayRobotValue) {
    if (arrayRobotValue.indexOf(value) !== arrayRobotValue.lastIndexOf(value)) {
      return null;
    }
  }

  for (const item in robot) {
    newRobotObject[robot[item]] = item;
  }

  return newRobotObject;
}

module.exports = inverseRobot;
