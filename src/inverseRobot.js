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

  for (let index = 0; index < robotKeys.length; index++) {
    if (newRobot.hasOwnProperty(robotKeys[index])) {
      return null;
    }

    newRobot[robotKeys[index]] = robotValues[index];
  }

  return newRobot;
}

module.exports = inverseRobot;
