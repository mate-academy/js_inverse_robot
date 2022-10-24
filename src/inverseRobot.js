'use strict';

/*
 * @param {object} robot
 *
 * @return {object}
*/

function inverseRobot(robot) {
  const active = {};

  for (const [key, value] of Object.entries(robot)) {
    if (active.hasOwnProperty(robot[key])) {
      return null;
    }
    active[value] = key;
  }

  return active;
}

module.exports = inverseRobot;
