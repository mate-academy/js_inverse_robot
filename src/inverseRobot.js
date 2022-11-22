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

  for (let i = 0; i < values.length; i++) {
    if (keys.indexOf(keys[i]) !== keys.lastIndexOf(keys[i])) {
      newBot = null;

      return newBot;
    }

    newBot[keys[i]] = values[i];
  }

  return newBot;
}

module.exports = inverseRobot;
