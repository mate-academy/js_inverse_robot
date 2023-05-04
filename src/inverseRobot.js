'use strict';

/*
 * @param {object} robot
 *
 * @return {object}
*/

function inverseRobot(robot) {
  const mirror = {};

  for (const part in robot) {
    if (!mirror[robot[part]]) {
      mirror[robot[part]] = part;
    } else {
      return null;
    }
  }

  return mirror;
}

module.exports = inverseRobot;
