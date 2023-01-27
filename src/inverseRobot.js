'use strict';

/*
 * @param {object} robot
 *
 * @return {object}
*/

function inverseRobot(robot) {
  const reversed = { ...robot };

  for (const key of Object.keys(reversed)) {
    if (reversed.hasOwnProperty(reversed[key])) {
      return null;
    }

    reversed[reversed[key]] = key;
    delete reversed[key];
  }

  return reversed;
}

module.exports = inverseRobot;
