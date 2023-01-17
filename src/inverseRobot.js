'use strict';

/*
 * @param {object} robot
 *
 * @return {object}
*/

function inverseRobot(robot) {
  const inversed = {};

  for (const keys in robot) {
    const value = keys;
    const name = robot[keys];

    if (inversed.hasOwnProperty(name)) {
      return null;
    }
    inversed[name] = value;
  }

  return inversed;
}

module.exports = inverseRobot;
