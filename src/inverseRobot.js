'use strict';

/*
 * @param {object} robot
 *
 * @return {object}
*/

function inverseRobot(robot) {
  const robotKeys = Object.values(robot);
  const robotValues = Object.keys(robot);
  const standardRobot = {};

  for (let i = 0; i < robotKeys.length; i++) {
    if (standardRobot.hasOwnProperty(robotKeys[i])) {
      return null;
    }

    standardRobot[robotKeys[i]] = robotValues[i];
  }

  return standardRobot;
}

module.exports = inverseRobot;
