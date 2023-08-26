'use strict';

/*
 * @param {object} robot
 *
 * @return {object}
*/

function inverseRobot(robot) {
  const reversedRobot = {};

  for (const key in robot) {
    const keyForReverse = robot[key];

    if (reversedRobot.hasOwnProperty(keyForReverse)) {
      return null;
    }

    reversedRobot[keyForReverse] = key;
  }

  return reversedRobot;
}

module.exports = inverseRobot;
