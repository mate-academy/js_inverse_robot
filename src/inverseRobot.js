'use strict';

/*
 * @param {object} robot
 *
 * @return {object}
*/

function inverseRobot(robot) {
  const mirrorBot = {};

  for (const key in robot) {
    const newKey = robot[key];

    if (newKey in mirrorBot) {
      return null;
    }

    mirrorBot[newKey] = key;
  }

  return mirrorBot;
}

module.exports = inverseRobot;
