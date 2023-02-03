'use strict';

/*
 * @param {object} robot
 *
 * @return {object}
*/

function inverseRobot(robot) {
  const inversedObject = {};

  for (const key in robot) {
    const property = robot[key];

    if (inversedObject[property]) {
      return null;
    }

    inversedObject[property] = key;
  }

  return inversedObject;
}

module.exports = inverseRobot;
