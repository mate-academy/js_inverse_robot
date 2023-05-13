'use strict';

/*
 * @param {object} robot
 *
 * @return {object}
*/

function inverseRobot(robot) {
  const resultRobot = {};

  for (const key in robot) {
    const value = robot[key];

    if (resultRobot.hasOwnProperty(robot[key])) {
      return null;
    }

    resultRobot[value] = key;
  }

  return resultRobot;
}

module.exports = inverseRobot;
