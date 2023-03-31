'use strict';

/*
 * @param {object} robot
 *
 * @return {object}
*/

function inverseRobot(robot) {
  const transformedRobot = {};

  for (const [key, value] of Object.entries(robot)) {
    if (transformedRobot[value]) {
      return null;
    } else {
      transformedRobot[value] = key;
    }
  }

  return transformedRobot;
}

module.exports = inverseRobot;
