'use strict';

/*
 * @param {object} robot
 *
 * @return {object}
*/

function inverseRobot(robot) {
  const object = {};

  for (const key in robot) {
    if (robot[key] in object) {
      return null;
    }

    object[robot[key]] = key;
  }

  return object;
}

module.exports = inverseRobot;
