'use strict';

/*
 * @param {object} robot
 *
 * @return {object}
*/

function inverseRobot(robot) {
  // write code here

  const updatedRobot = {};

  for (const [key, value] of Object.entries(robot)) {
    if (updatedRobot[value]) {
      return null;
    }

    updatedRobot[value] = key;
  }

  return updatedRobot;
}

module.exports = inverseRobot;
