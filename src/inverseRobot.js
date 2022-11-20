'use strict';

/*
 * @param {object} robot
 *
 * @return {object}
*/

function inverseRobot(robot) {
  const robotEntries = Object.entries(robot);
  const corectRobot = {};

  for (const data of robotEntries) {
    if (corectRobot.hasOwnProperty(data[1])) {
      return null;
    }

    corectRobot[data[1]] = data[0];
  }

  return corectRobot;
}

module.exports = inverseRobot;
