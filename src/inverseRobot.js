'use strict';

/*
 * @param {object} robot
 *
 * @return {object}
*/

function inverseRobot(robot) {
  const inversedRobot = {};

  for (const property in robot) {
    if (inversedRobot.hasOwnProperty([robot[property]])) {
      return null;
    }

    inversedRobot[robot[property]] = property;
  }

  return inversedRobot;
}

module.exports = inverseRobot;
