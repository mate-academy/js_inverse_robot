'use strict';

/*
 * @param {object} robot
 *
 * @return {object}
*/

function inverseRobot(robot) {
  const INVERSED_ROBOT = {};

  for (const key in robot) {
    const VALUE = robot[key];

    if (VALUE in INVERSED_ROBOT) {
      return null;
    }

    INVERSED_ROBOT[VALUE] = key;
  }

  return INVERSED_ROBOT;
}

module.exports = inverseRobot;
