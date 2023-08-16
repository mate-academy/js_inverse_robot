'use strict';

/*
 * @param {object} robot
 *
 * @return {object}
*/

function inverseRobot(robot) {
  const inversed = {};

  for (const key in robot) {
    if (inversed[robot[key]]) {
      return null;
    }

    inversed[robot[key]] = key;
  }

  return inversed;
};

module.exports = inverseRobot;
