'use strict';

/*
 * @param {object} robot
 *
 * @return {object}
*/

function inverseRobot(robot) {
  const inversedRobot = {};

  const keys = Object.keys(robot);

  for (const key of keys) {
    if (Object.prototype.hasOwnProperty.call(inversedRobot, robot[key])) {
      return null;
    } else {
      inversedRobot[robot[key]] = key;
    }
  }

  return inversedRobot;
}

module.exports = inverseRobot;
