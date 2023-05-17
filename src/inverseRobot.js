'use strict';

/*
 * @param {object} robot
 *
 * @return {object}
*/

function inverseRobot(robot) {
  const newRobot = {};

  for (const keyName in robot) {
    if (newRobot.hasOwnProperty(robot[keyName])) {
      return null;
    }
    newRobot[robot[keyName]] = keyName;
  }

  return newRobot;
}

module.exports = inverseRobot;
