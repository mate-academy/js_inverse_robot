'use strict';

/*
 * @param {object} robot
 *
 * @return {object}
*/

function inverseRobot(robot) {
  // write code here

  const robotKeys = Object.keys(robot);
  const robotValues = Object.values(robot);

  const reversedRobot = {};

  for (let j = 0; j < robotKeys.length; j++) {
    if (reversedRobot.hasOwnProperty(robotValues[j])) {
      return null;
    }

    reversedRobot[robotValues[j]] = String(robotKeys[j]);
  }

  return reversedRobot;
}

module.exports = inverseRobot;
