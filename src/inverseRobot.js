'use strict';

/*
 * @param {object} robot
 *
 * @return {object}
*/

function inverseRobot(robot) {
  const newRobot = {};
  const values = Object.keys(robot);
  const keys = Object.values(robot);

  for (let i = 0; i < keys.length; i++) {
    if (newRobot.hasOwnProperty(keys[i])) {
      return null;
    }
    newRobot[keys[i]] = values[i];
  }

  return newRobot;
}

module.exports = inverseRobot;
