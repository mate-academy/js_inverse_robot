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

    if (value in reversRobot) {
      return null;
    }

    reversRobot[value] = key;
  }

  return reversRobot;
}

module.exports = inverseRobot;
