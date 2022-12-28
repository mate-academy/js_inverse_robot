'use strict';

/*
 * @param {object} robot
 *
 * @return {object}
*/

function inverseRobot(robot) {
  const reversedRobot = {};

  for (const key in robot) {
    const trueKey = robot[key];

    if (reversedRobot.hasOwnProperty(trueKey)) {
      return null;
    }
    reversedRobot[trueKey] = key;
  }

  return reversedRobot;
}

module.exports = inverseRobot;
