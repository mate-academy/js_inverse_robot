'use strict';

/*
 * @param {object} robot
 *
 * @return {object}
*/

function inverseRobot(robot) {
  const invertedRobot = {};

  for (const [key, value] of Object.entries(robot)) {
    if (invertedRobot[value] !== undefined) {
      return null;
    }
    invertedRobot[value] = key;
  }

  return invertedRobot;
}

module.exports = inverseRobot;
