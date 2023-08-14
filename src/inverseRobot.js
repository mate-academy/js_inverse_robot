'use strict';

/*
 * @param {object} robot
 *
 * @return {object}
*/

function inverseRobot(robot) {
  const robotEntries = Object.entries(robot);
  const result = {};

  for (const [key, value] of robotEntries) {
    if (result.hasOwnProperty(value)) {
      return null;
    }

    result[value] = key;
  }

  return result;
}

module.exports = inverseRobot;
