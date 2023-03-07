'use strict';

/*
 * @param {object} robot
 *
 * @return {object}
*/

function inverseRobot(robot) {
  const arrOfEntries = Object.entries(robot);
  const correctRobot = {};

  for (const [value, key] of arrOfEntries) {
    if (correctRobot.hasOwnProperty(key)) {
      return null;
    }

    correctRobot[key] = value;
  }

  return correctRobot;
}

module.exports = inverseRobot;
