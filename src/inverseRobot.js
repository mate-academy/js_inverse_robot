'use strict';

/*
 * @param {object} robot
 *
 * @return {object}
 */

function inverseRobot(robot) {
  const robotInversed = {};
  let robotValues = [];

  robotValues = Object.values(robot);

  for (let i = 0; i < robotValues.length; i++) {
    for (let j = 0; j < robotValues.length; j++) {
      if (i === j) {
        continue;
      }

      if (robotValues[i] === robotValues[j]) {
        return null;
      }
    }
  }

  for (const key in robot) {
    robotInversed[robot[key]] = key;
  }

  return robotInversed;
}

module.exports = inverseRobot;
