'use strict';

/*
 * @param {object} robot
 *
 * @return {object}
*/

function inverseRobot(robot) {
  const robotValues = Object.values(robot);
  const robotKeys = Object.keys(robot);
  const resultObject = {};

  for (let i = 0; i < robotValues.length; i++) {
    for (let a = robotValues.length - 1; a >= 0; a--) {
      if (a !== i) {
        if (robotValues[i] === robotValues[a]) {
          return null;
        }
      }

      resultObject[robotValues[a]] = robotKeys[a];
    }
  }

  return resultObject;
}

module.exports = inverseRobot;
