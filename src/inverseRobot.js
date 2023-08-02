'use strict';

/*
 * @param {object} robot
 *
 * @return {object}
 */

function inverseRobot(robot) {
  const inversedObject = {};

  for (const key in robot) {
    const newKey = robot[key];

    if (newKey in inversedObject) {
      return null;
    }

    inversedObject[newKey] = key;
  }

  return inversedObject;
}

module.exports = inverseRobot;
