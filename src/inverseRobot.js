'use strict';

/*
 * @param {object} robot
 *
 * @return {object}
*/

function inverseRobot(robot) {
  const robotKeys = Object.values(robot);
  const robotValues = Object.keys(robot);
  let newRobot = {};

  for (let i = 0; i < robotKeys.length; i++) {
    const key = robotKeys[i];

    if (newRobot.hasOwnProperty(robotKeys[i])) {
      newRobot = null;

      return newRobot;
    }

    newRobot[key] = robotValues[i];
  }

  return newRobot;
}

module.exports = inverseRobot;
