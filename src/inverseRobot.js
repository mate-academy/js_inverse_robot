'use strict';

/*
 * @param {object} robot
 *
 * @return {object}
*/

function inverseRobot(robot) {
  const reversedRobot = {};

  for (const key in robot) {
    const value = robot[key];

    if (value in reversedRobot) {
      return null;
    }

    reversedRobot[value] = key;
  }

  return reversedRobot;
}

module.exports = inverseRobot;
