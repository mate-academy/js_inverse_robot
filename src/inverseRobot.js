'use strict';

/*
 * @param {object} robot
 *
 * @return {object}
*/

function inverseRobot(robot) {
  const reversibleRobot = {};

  for (const key in robot) {
    if (reversibleRobot.hasOwnProperty(robot[key])) {
      return null;
    }

    reversibleRobot[robot[key]] = key;
  }

  return reversibleRobot;
}

module.exports = inverseRobot;
