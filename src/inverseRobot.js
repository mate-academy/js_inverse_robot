'use strict';

/*
 * @param {object} robot
 *
 * @return {object}
*/

function inverseRobot(robot) {
  const robotValues = Object.values(robot);
  const newObject = {};

  const uniqueValues = {};

  for (let i = 0; i < robotValues.length; i++) {
    if (uniqueValues.hasOwnProperty(robotValues[i])) {
      return null;
    }

    uniqueValues[robotValues[i]] = true;
  }

  for (const key in robot) {
    const value = robot[key];

    newObject[value] = key;
  }

  return newObject;
}

module.exports = inverseRobot;
