'use strict';

/*
 * @param {object} robot
 *
 * @return {object}
*/

function inverseRobot(robot) {
  const robotArr = Object.values(robot);
  const newArr = [...new Set(robotArr)];
  const invRobot = {};

  if (robotArr.length !== newArr.length) {
    return null;
  }

  for (const key in robot) {
    invRobot[robot[key]] = key;
  }

  return invRobot;
}

module.exports = inverseRobot;
