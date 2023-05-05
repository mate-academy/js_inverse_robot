'use strict';

/*
 * @param {object} robot
 *
 * @return {object}
*/

function inverseRobot(robot) {
  const mirror = {};

  for (const part in robot) {
    if (mirror.hasOwnProperty(robot[part])) {
      return null;
    }

    mirror[robot[part]] = part;
  }

  return mirror;
}

module.exports = inverseRobot;
