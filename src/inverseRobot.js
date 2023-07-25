'use strict';

/*
 * @param {object} robot
 *
 * @return {object}
*/

function inverseRobot(robot) {
  const goodRobot = {};

  for (const key in robot) {
    const robotProperty = robot[key];

    if (goodRobot.hasOwnProperty(robotProperty)) {
      return null;
    }
    goodRobot[robotProperty] = key;
  }

  return goodRobot;
}

module.exports = inverseRobot;
