'use strict';

/*
 * @param {object} robot
 *
 * @return {object}
*/

function inverseRobot(robot) {
  const inversedRobot = {};

  const robotKeys = Object.keys(robot);
  const robotValues = Object.values(robot);

  for (let i = 0; i < robotKeys.length; i++) {
    if (inversedRobot.hasOwnProperty(robotValues[i])) {
      return null;
    }

    inversedRobot[robotValues[i]] = robotKeys[i];
  }

  return inversedRobot;
}

module.exports = inverseRobot;
