'use strict';

/*
 * @param {object} robot
 *
 * @return {object}
*/

function inverseRobot(robot) {
  const inversedRobot = {};

  for (const key in robot) {
    if (robot[key] in inversedRobot) {
      return null;
    }
    
    inversedRobot[robot[key]] = key;
  }

  return inversedRobot;
}

module.exports = inverseRobot;
