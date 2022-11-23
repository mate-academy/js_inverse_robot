'use strict';

/*
 * @param {object} robot
 *
 * @return {object}
*/

function inverseRobot(robot) {
  const values = Object.keys(robot);
  const keys = Object.values(robot);
  let newBot = {};

  for (const key in keys) {
    if (keys.indexOf(keys[key]) !== keys.lastIndexOf(keys[key])) {
      newBot = null;

      return newBot;
    }

    newBot[keys[key]] = values[key];
  }

  return newBot;
}

module.exports = inverseRobot;
