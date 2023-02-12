'use strict';

/*
 * @param {object} robot
 *
 * @return {object}
*/

function inverseRobot(robot) {
  const newRobot = {};
  const robotKeys = Object.values(robot);
  const robotValues = Object.keys(robot);

  for (let i = 0; i < robotValues.length; i++) {
    if (newRobot.hasOwnProperty(robotKeys[i])) {
      return null;
    }
    newRobot[`${robotKeys[i]}`] = robotValues[i];
  }

  return newRobot;
}

module.exports = inverseRobot;
