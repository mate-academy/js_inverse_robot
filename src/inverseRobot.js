'use strict';

/*
 * @param {object} robot
 *
 * @return {object}
*/

function inverseRobot(robot) {
  const invertedObject = {};

  for (const key in robot) {
    const value = robot[key];

    if (invertedObject.hasOwnProperty(value)) {
      return null;
    }

    invertedObject[value] = key;
  }

  return invertedObject;
}

module.exports = inverseRobot;
