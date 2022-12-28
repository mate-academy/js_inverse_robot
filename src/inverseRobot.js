'use strict';

/*
 * @param {object} robot
 *
 * @return {object}
*/

function inverseRobot(robot) {
  const robotNew = {};

  for (const keys in robot) {
    robotNew[robot[keys]] = keys;
  }

  if (Object.keys(robotNew).length !== Object.values(robot).length) {
    return null;
  }

  return robotNew;
}

module.exports = inverseRobot;
