'use strict';

/*
 * @param {object} robot
 *
 * @return {object}
*/

function inverseRobot(robot) {
  const robotKeys = Object.keys(robot);
  const newRobot = {};

  for (let i = 0; i < robotKeys.length; i++) {
    if (newRobot.hasOwnProperty(robot[robotKeys[i]])) {
      return null;
    }
    newRobot[robot[robotKeys[i]]] = robotKeys[i];
  }

  return newRobot;
}

module.exports = inverseRobot;
