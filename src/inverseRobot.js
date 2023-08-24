'use strict';

/*
 * @param {object} robot
 *
 * @return {object}
*/

function inverseRobot(robot) {
  const object = {};

  for (const value in robot) {
    if (object.hasOwnProperty(robot[value])) {
      return null;
    }

    object[robot[value]] = value;
  }

  return object;
}

module.exports = inverseRobot;
