'use strict';

/*
 * @param {object} robot
 *
 * @return {object}
*/

function inverseRobot(robot) {
  const result = {};

  for (const key of Object.keys(robot)) {
    const a = robot[key];

    if (result.hasOwnProperty(a)) {
      return null;
    } else {
      result[a] = key;
    }
  }

  return result;
}

module.exports = inverseRobot;
