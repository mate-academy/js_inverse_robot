'use strict';

/*
 * @param {object} robot
 *
 * @return {object}
*/

function inverseRobot(robot) {
  const robotValues = Object.values(robot);
  const robotKeys = Object.keys(robot);
  const newObj = {};

  for (const value of robotValues) {
    if (robotValues.indexOf(value) !== robotValues.lastIndexOf(value)) {
      return null;
    }
  }

  for (let i = 0; i < robotKeys.length; i++) {
    newObj[robotValues[i]] = robotKeys[i];
  }

  return { ...newObj };
}

module.exports = inverseRobot;
