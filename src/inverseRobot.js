'use strict';

/*
 * @param {object} robot
 *
 * @return {object}
*/

function inverseRobot(robot) {
  const inversedObject = {};

  for (const key in robot) {
    const value = [robot[key]];

    if (inversedObject[value]) {
      return null;
    }
    inversedObject[value] = key;
  }

  return inversedObject;
}

module.exports = inverseRobot;
