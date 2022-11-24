'use strict';

/*
 * @param {object} robot
 *
 * @return {object}
*/

function inverseRobot(robot) {
  const inversedRobot = {};

  for (const key in robot) {
    const property = robot[key];

    if (inversedRobot.hasOwnProperty(property)) {
      return null;
    } else {
      inversedRobot[property] = key;
    }
  }

  return inversedRobot;
}

module.exports = inverseRobot;
