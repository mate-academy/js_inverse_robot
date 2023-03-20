'use strict';

/*
 * @param {object} robot
 *
 * @return {object}
*/

function inverseRobot(robot) {
  // write code here
  const inversedRobot  = {};

  for (const[key, value] of Object.entries(robot)) {
    inversedRobot[value] = key;
  }
  return inversedRobot;
}

module.exports = inverseRobot;
