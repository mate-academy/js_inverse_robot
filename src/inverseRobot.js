/* eslint-disable no-param-reassign */
'use strict';

/*
 * @param {object} robot
 *
 * @return {object}
*/

function inverseRobot(robot) {
  for (const key in robot) {
    if (robot.hasOwnProperty(robot[key])) {
      return (robot = null);
    } else {
      robot[`${(robot[key])}`] = key;
      delete robot[key];
    }
  }

  return robot;
}

module.exports = inverseRobot;
