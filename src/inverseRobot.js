'use strict';

/*
 * @param {object} robot
 *
 * @return {object}
*/

function inverseRobot(robot) {
  const robotKeys = Object.keys(robot);
  const robotValues = Object.values(robot);
  const newObject = {};

  for (let i = 0; i < robotValues.length; i++) {
    for (let j = i + 1; j < robotValues.length; j++) {
      if (robotValues[i] === robotValues[j]) {
        return null;
      }
    }
  }

  for (const i in robotKeys) {
    const key = robotValues[i];
    const value = robotKeys[i];

    newObject[key] = value;
  }

  return newObject;
}

module.exports = inverseRobot;
