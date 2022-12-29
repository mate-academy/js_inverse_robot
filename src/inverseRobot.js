'use strict';

/*
 * @param {object} robot
 *
 * @return {object}
*/

function inverseRobot(robot) {
  const invertedRobot = {};
  const robotValues = Object.values(robot);

  for (let i = 0; i < robotValues.length - 1; i++) {
    if (robotValues.includes(robotValues[i], i + 1)) {
      return null;
    }
  }

  for (const key in robot) {
    invertedRobot[robot[key]] = key;
  }

  return invertedRobot;
}

module.exports = inverseRobot;
