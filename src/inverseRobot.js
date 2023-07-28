'use strict';

/*
 * @param {object} robot
 *
 * @return {object}
*/

function inverseRobot(robot) {
  const object = {};

  for (const key in robot) {
    if (object[robot[key]]) {
      return null;
    }

    object[robot[key]] = key;
  }

  return object;
}

module.exports = inverseRobot;
