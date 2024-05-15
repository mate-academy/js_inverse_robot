'use strict';

/*
 * @param {object} robot
 *
 * @return {object}
*/

function inverseRobot(robot) {
  // write code here
  const inversedPropertise = {};

  for (const key in robot) {
    if (!inversedPropertise.hasOwnProperty(robot[key])) {
      inversedPropertise[robot[key]] = key;
    } else {
      return null;
    }
  }

  return inversedPropertise;
}

module.exports = inverseRobot;
