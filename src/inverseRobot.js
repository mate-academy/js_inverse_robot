'use strict';

/*
 * @param {object} robot
 *
 * @return {object}
*/

function inverseRobot(robot) {
  let propName;

  for (const key in robot) {
    propName = robot[key];

    if (robot.hasOwnProperty(propName)) {
      return null;
    }

    robot[`${propName}`] = key;
    delete robot[key];
  }

  return robot;
}

module.exports = inverseRobot;
