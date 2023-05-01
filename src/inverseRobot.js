'use strict';

/*
 * @param {object} robot
 *
 * @return {object}
*/

function inverseRobot(robot) {
  const robotKeys = Object.keys(robot).reverse();
  const robotValues = Object.values(robot).reverse();
  const invRobot = {};

  for (let i = 0; i < robotKeys.length; i++) {
    if (invRobot.hasOwnProperty(robotValues[i])) {
      return null;
    }

    invRobot[robotValues[i]] = robotKeys[i];
  }

  return invRobot;
}

module.exports = inverseRobot;
