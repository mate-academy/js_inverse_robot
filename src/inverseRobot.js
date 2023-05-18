'use strict';

/*
 * @param {object} robot
 *
 * @return {object}
*/

function inverseRobot(robot) {
  const newObject = {};

  for (const key in robot) {
    const value = robot[key];

    if (newObject.hasOwnProperty(robot[key])) {
      return null;
    }

    newObject[value] = key;
  }

  return newObject;
}

module.exports = inverseRobot;
