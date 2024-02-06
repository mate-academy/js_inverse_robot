'use strict';

/*
 * @param {object} robot
 *
 * @return {object}
*/

function inverseRobot(robot) {
  const newRobot = {};

  for (const property in robot) {
    if (newRobot.hasOwnProperty(robot[property])) {
      return null;
    }

    newRobot[robot[property]] = property;
  }

  return newRobot;
}

module.exports = inverseRobot;
