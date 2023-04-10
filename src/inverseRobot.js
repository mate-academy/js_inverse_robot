'use strict';

/*
 * @param {object} robot
 *
 * @return {object}
*/

function inverseRobot(robot) {
  const objRevers = {};

  for (const [key, value] of Object.entries(robot)) {
    if (objRevers[value] !== undefined) {
      return null;
    }
    objRevers[value] = key;
  }

  return objRevers;
}

module.exports = inverseRobot;
