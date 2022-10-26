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
    if (!corectRobot[data[1]]) {
      corectRobot[data[1]] = data[0];
    } else {
      return null;
    }
  }

  return corectRobot;
}

module.exports = inverseRobot;
