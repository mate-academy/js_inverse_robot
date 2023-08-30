'use strict';

/*
 * @param {object} robot
 *
 * @return {object}
*/

function inverseRobot(robot) {
  const changed = {};

  for (const [value, key] of Object.entries(robot)) {
    if (key in changed) {
      return null;
    }
    changed[key] = value;
  }

  return changed;
}

module.exports = inverseRobot;
