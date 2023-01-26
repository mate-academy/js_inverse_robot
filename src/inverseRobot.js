'use strict';

/*
 * @param {object} robot
 *
 * @return {object}
*/

function inverseRobot(robot) {
  const reverseKeys = {};

  for (const key in robot) {
    if (reverseKeys.hasOwnProperty(robot[key])) {
      return null;
    }
    reverseKeys[robot[key]] = key;
  }

  return reverseKeys;
}

module.exports = inverseRobot;
