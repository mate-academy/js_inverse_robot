'use strict';

/*
 * @param {object} robot
 *
 * @return {object}
*/

function inverseRobot(robot) {
  const twin = {};

  for (const key in robot) {
    if (twin.hasOwnProperty(robot[key])) {
      return null;
    }
    twin[robot[key]] = key;
  }

  return twin;
}

module.exports = inverseRobot;
