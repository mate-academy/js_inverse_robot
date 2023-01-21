'use strict';

/*
 * @param {object} robot
 *
 * @return {object}
*/

function inverseRobot(robot) {
  const result = {};
  const robotValues = Object.values(robot);

  for (const key in robot) {
    result[robot[key]] = key;

    for (let i = 0; i < robotValues.length; i++) {
      for (let c = i + 1; c < robotValues.length; c++) {
        if

        (robotValues[i] === robotValues[c]) {
          return null;
        }
      }
    }
  }

  return result;
}

module.exports = inverseRobot;
