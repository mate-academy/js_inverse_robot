'use strict';

/*
 * @param {object} robot
 *
 * @return {object}
*/

function inverseRobot(robot) {
  const result = {};

  for (const [keys, name] of Object.entries(robot)) {
    if (result[name] === undefined) {
      result[name] = keys;
    } else {
      return null;
    };
  }

  return result;
}

module.exports = inverseRobot;
