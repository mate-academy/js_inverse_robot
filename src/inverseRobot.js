'use strict';

/*
 * @param {object} robot
 *
 * @return {object}
*/

function inverseRobot(robot) {
  const invertedRobot = {};

  for (const item in robot) {
    if (invertedRobot.hasOwnProperty(robot[item])) {
      return null;
    }

    invertedRobot[robot[item]] = item;
  }

  return invertedRobot;
}

module.exports = inverseRobot;
