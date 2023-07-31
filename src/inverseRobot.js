'use strict';

/*
 * @param {object} robot
 *
 * @return {object}
*/

function inverseRobot(robot) {
  const inversedRobot = {};

  for (const KEY in robot) {
    const VALUE = robot[KEY];

    if (inversedRobot.hasOwnProperty(VALUE)) {
      return null;
    }

    inversedRobot[VALUE] = KEY;
  }

  return inversedRobot;
}

module.exports = inverseRobot;
