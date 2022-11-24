'use strict';

/*
 * @param {object} robot
 *
 * @return {object}
*/

function inverseRobot(robot) {
  const values = Object.keys(robot);
  const keys = Object.values(robot);
  const newBot = {};

  for (const key of keys) {
    if (keys.indexOf(key) !== keys.lastIndexOf(key)) {
      return null;
    }

    newBot[key] = values[keys.indexOf(key)];
  }

  return newBot;
}

module.exports = inverseRobot;
