'use strict';

/*
 * @param {object} robot
 *
 * @return {object}
*/

function inverseRobot(robot) {
  const invertedRobot = {};
  // const usedKeywords = [];

  for (const key in robot) {
    if (invertedRobot.hasOwnProperty(robot[key])) {
      return null;
    } else {
      invertedRobot[robot[key]] = key;
    }
  }

  return invertedRobot;
}

inverseRobot();

module.exports = inverseRobot;
