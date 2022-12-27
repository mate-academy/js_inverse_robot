'use strict';

/*
 * @param {object} robot
 *
 * @return {object}
*/

function inverseRobot(robot) {
  const invertedCopy = {};
  const robotValues = Object.values(robot);

  for (let i = 0; i < robotValues.length; i++) {
    for (let j = i + 1; j < robotValues.length; j++) {
      if (robotValues[i] === robotValues[j]) {
        return null;
      }
    }
  }

  for (const key in robot) {
    invertedCopy[robot[key]] = String(key);
  }

  return invertedCopy;
}

module.exports = inverseRobot;
