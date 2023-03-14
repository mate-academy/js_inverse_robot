'use strict';

/*
 * @param {object} robot
 *
 * @return {object}
*/

function inverseRobot(robot) {
  const inversRobot = {};

  for (const robotProperty in robot) {
    if (inversRobot.hasOwnProperty(robot[robotProperty])) {
      return null;
    }

    inversRobot[robot[robotProperty]] = robotProperty;
  }

  return inversRobot;
}

module.exports = inverseRobot;
