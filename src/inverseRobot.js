'use strict';

/*
 * @param {object} robot
 *
 * @return {object}
*/

function inverseRobot(robot) {
  const robotValues = Object.values(robot);

  for (let i = 1; i < robotValues.length; i += 1) {
    if (robotValues[0] === robotValues[i]) {
      return null;
    }
  }

  const robotNew = {};

  for (const key in robot) {
    robotNew[robot[key]] = key;
  }

  return robotNew;
}

module.exports = inverseRobot;
