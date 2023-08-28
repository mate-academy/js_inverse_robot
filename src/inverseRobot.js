'use strict';

/*
 * @param {object} robot
 *
 * @return {object}
*/

function inverseRobot(robot) {
  const robotValues = Object.values(robot);
  const robotInverse = {};

  for (let i = 0; i < robotValues.length; i++) {
    if (robotValues.indexOf(robotValues[i]) !== i) {
      return null;
    }
  }

  for (const key in robot) {
    robotInverse[robot[key]] = key;
  }

  return robotInverse;
}

module.exports = inverseRobot;
