'use strict';

/*
 * @param {object} robot
 *
 * @return {object}
*/

function inverseRobot(robot) {
  const entries = Object.entries(robot);
  const inversed = {};

  for (const [key, value] of entries) {
    if (inversed.hasOwnProperty(value)) {
      return null;
    }
    inversed[value] = key;
  }

  return inversed;
}

module.exports = inverseRobot;
