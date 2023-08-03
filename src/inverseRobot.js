'use strict';

/*
 * @param {object} robot
 *
 * @return {object}
*/

function inverseRobot(robot) {
  const reversRobot = {};

  for (const KEY in robot) {
    const VALUE = robot[KEY];

    if (reversRobot[VALUE]) {
      return null;
    }

    reversRobot[VALUE] = KEY;
  }

  return reversRobot;
}

module.exports = inverseRobot;
