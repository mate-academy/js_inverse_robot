'use strict';

/*
 * @param {object} robot
 *
 * @return {object}
*/

function inverseRobot(robot) {
  const entries = Object.entries(robot);

  if (new Set(Object.values(robot)).size !== [...entries].length) {
    return null;
  }

  return Object.fromEntries(
    entries.map(([ key, val ]) => [ val, key ]));
}

module.exports = inverseRobot;
