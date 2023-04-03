'use strict';

/*
 * @param {object} robot
 *
 * @return {object}
*/

function inverseRobot(robot) {
  const robotKeys = Object.keys(robot);
  const robotValues = Object.values(robot);

  for (let i = 0; i < robotValues.length; i++) {
    if (robotValues.indexOf(robotValues[i])
    !== robotValues.lastIndexOf(robotValues[i])) {
      return null;
    }
  }

  const newRobot = {};

  for (let j = 0; j < robotValues.length; j++) {
    newRobot[robotValues[j]] = robotKeys[j];
  }

  return newRobot;
}

module.exports = inverseRobot;
