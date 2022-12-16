'use strict';

/*
 * @param {object} robot
 *
 * @return {object}
*/

function inverseRobot(robot) {
  const newRobot = {};
  const keys = Object.keys(robot);
  const values = Object.values(robot);

  for (let i = keys.length - 1; i >= 0; i--) {
    if (newRobot.hasOwnProperty(values[i])) {
      return null;
    }
    newRobot[values[i]] = keys[i];
  }

  return newRobot;
}

module.exports = inverseRobot;
