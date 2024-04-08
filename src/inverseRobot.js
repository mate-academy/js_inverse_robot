'use strict';

/*
 * @param {object} robot
 *
 * @return {object}
*/

function inverseRobot(robot) {
  const robotEntries = Object.entries(robot);

  const newRobot = {};

  for (let j = 0; j < robotEntries.length; j++) {
    if (newRobot.hasOwnProperty(robotEntries[j][1])) {
      return null;
    }
    newRobot[robotEntries[j][1]] = robotEntries[j][0];
  }

  return newRobot;
}

module.exports = inverseRobot;
