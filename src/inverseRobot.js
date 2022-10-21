'use strict';

/*
 * @param {object} robot
 *
 * @return {object}
*/

function inverseRobot(robot) {
  const goodRobot = {};

  for (const key in robot) {
    if (goodRobot.hasOwnProperty(robot[key])) {
      return null;
    }

    goodRobot[robot[key]] = key;
  }

  return goodRobot;
}

module.exports = inverseRobot;
