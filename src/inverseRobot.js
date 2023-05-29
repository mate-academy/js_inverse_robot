'use strict';

/*
 * @param {object} robot
 *
 * @return {object}
*/

function inverseRobot(robot) {
  const invertedRobot = {};
  const usedKeywords = [];

  for (const key in robot) {
    if (!usedKeywords.includes(key) && !usedKeywords.includes(robot[key])) {
      invertedRobot[robot[key]] = key;
      usedKeywords.push(key);
      usedKeywords.push(robot[key]);
    } else {
      return null;
    }
  }

  return invertedRobot;
}

inverseRobot();

module.exports = inverseRobot;
