'use strict';

/*
 * @param {object} robot
 *
 * @return {object}
*/

function inverseRobot(robot) {
  const inversed = {};

  for (const key in robot) {
    const swapper = robot[key];

    if (inversed.hasOwnProperty(swapper)) {
      return null;
    }

    inversed[swapper] = key;
  }

  return inversed;
}

module.exports = inverseRobot;
