'use strict';

/*
 * @param {object} robot
 *
 * @return {object}
*/

function inverseRobot(robot) {
  const inverseRoboto = {};

  for (const key in robot) {
    if (inverseRoboto.hasOwnProperty(robot[key])) {
      return null;
    }

    inverseRoboto[robot[key]] = key;
  }

  return inverseRoboto;
}

module.exports = inverseRobot;
