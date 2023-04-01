'use strict';

/*
 * @param {object} robot
 *
 * @return {object}
*/

function inverseRobot(robot) {
  const inversusRobot = {};

  for (const key in robot) {
    if (inversusRobot.hasOwnProperty([robot[key]])) {
      return null;
    }

    inversusRobot[robot[key]] = key;
  }

  return inversusRobot;
}

module.exports = inverseRobot;
