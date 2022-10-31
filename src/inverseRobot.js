'use strict';

/*
 * @param {object} robot
 *
 * @return {object}
*/

function inverseRobot(robot) {
  const nameSake = {};

  for (const key in robot) {
    if (!nameSake[robot[key]]) {
      nameSake[robot[key]] = key;
    } else {
      return null;
    }
  }

  return nameSake;
}

module.exports = inverseRobot;
