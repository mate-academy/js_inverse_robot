'use strict';

/*
 * @param {object} robot
 *
 * @return {object}
*/

function inverseRobot(robot) {
  const reversRobot = {};

  for (const key in robot) {
    const value = robot[key];

    if (reversRobot.hasOwnProperty(value)) {
      return null;
    }
    reversRobot[robot[key]] = key;
  }

  return reversRobot;
}

module.exports = inverseRobot;
