'use strict';

/*
 * @param {object} robot
 *
 * @return {object}
*/

function inverseRobot(robot) {
  const inversedObject = {};

  for (const key in robot) {
    if (inversedObject[robot[key]]) {
      return null;
    }
    inversedObject[robot[key]] = key;
  }

  return inversedObject;
}

module.exports = inverseRobot;
