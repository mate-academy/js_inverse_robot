'use strict';

/*
 * @param {object} robot
 *
 * @return {object}
*/

function inverseRobot(robot) {
  const object = {};

  for (const key in robot) {
    const value = robot[key];

    if (object[value] !== undefined) {
      return null;
    }
    object[value] = key;
  }

  return object;
}

module.exports = inverseRobot;
