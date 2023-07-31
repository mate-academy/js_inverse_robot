'use strict';

/*
 * @param {object} robot
 *
 * @return {object}
*/

function inverseRobot(robot) {
  const recipient = {};

  for (const [value, key] of Object.entries(robot)) {
    if (key in recipient) {
      return null;
    }

    recipient[key] = value;
  }

  return recipient;
}

module.exports = inverseRobot;
