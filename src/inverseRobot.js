'use strict';

/*
 * @param {object} robot
 *
 * @return {object}
*/

function inverseRobot(robot) {
  const nevObj = {};

  for (const [key, value] of Object.entries(robot)) {
    if (nevObj[value] !== undefined) {
      return null;
    }

    nevObj[value] = key;
  }

  return nevObj;
}

module.exports = inverseRobot;
