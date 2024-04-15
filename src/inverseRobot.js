'use strict';

/*
 * @param {object} robot
 *
 * @return {object}
*/

function inverseRobot(robot) {
  const invertedRobot = {};

  for (const key in robot) {
    if (invertedRobot.hasOwnProperty(robot[key])) {
      return null;
    }

    invertedRobot[String(robot[key])] = key;
  }

  return invertedRobot;
}

module.exports = inverseRobot;
