'use strict';

/*
 * @param {object} robot
 *
 * @return {object}
 */

function inverseRobot(robot) {
  const oldKeys = Object.keys(robot);
  const oldValues = Object.values(robot);

  const newRobot = {};

  for (let i = 0; i <= oldKeys.length; i++) {
    if (newRobot.hasOwnProperty(oldValues[i])) {
      return null;
    }

    newRobot[oldValues[i]] = oldKeys[i];
  }

  return newRobot;
}

module.exports = inverseRobot;
