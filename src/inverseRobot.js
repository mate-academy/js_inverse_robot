'use strict';

/*
 * @param {object} robot
 *
 * @return {object}
*/

function inverseRobot(robot) {
  const repairedRobot = {};

  for (const property in robot) {
    if (repairedRobot.hasOwnProperty(robot[property])) {
      return null;
    }

    repairedRobot[robot[property]] = property;
  }

  return repairedRobot;
}

module.exports = inverseRobot;
