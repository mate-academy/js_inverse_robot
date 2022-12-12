'use strict';

/*
 * @param {object} robot
 *
 * @return {object}
*/

function inverseRobot(robot) {
  const newBot = {};

  for (const key in robot) {
    if (newBot.hasOwnProperty(robot[key])) {
      return null;
    }
    newBot[robot[key]] = key;
  }

  return newBot;
}

module.exports = inverseRobot;
