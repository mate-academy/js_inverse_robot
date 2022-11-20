'use strict';

/*
 * @param {object} robot
 *
 * @return {object}
*/

function inverseRobot(robot) {
  const reverseKeys = {};

  for (const keys in robot) {
    if (reverseKeys.hasOwnProperty(robot[keys])) {
      return null;
    }
    reverseKeys[robot[keys]] = keys;
  }

  return reverseKeys;
}

module.exports = inverseRobot;
