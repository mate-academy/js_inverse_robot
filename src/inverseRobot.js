'use strict';

/*
 * @param {object} robot
 *
 * @return {object}
*/

function inverseRobot(robot) {
  const newRobot = {};

  for (const key in robot) {
    const robotProp = robot[key];

    if (newRobot.hasOwnProperty(robotProp)) {
      return null;
    }
    newRobot[robotProp] = key;
  }

  return newRobot;
}

module.exports = inverseRobot;
