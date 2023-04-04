'use strict';

/*
 * @param {object} robot
 *
 * @return {object}
*/

function inverseRobot(robot) {
  const robotKeys = Object.keys(robot);
  const robotValues = Object.values(robot);

  const newRobot = {};

  for (let j = 0; j < robotValues.length; j++) {
    if (newRobot.hasOwnProperty(robotValues[j])) {
      return null;
    }
    newRobot[robotValues[j]] = robotKeys[j];
  }

  return newRobot;
}

module.exports = inverseRobot;
