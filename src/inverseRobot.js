'use strict';

/*
 * @param {object} robot
 *
 * @return {object}
*/

function inverseRobot(robot) {
  const invertedObject = {};

  for (const [key, value] of Object.entries(robot)) {
    if (invertedObject.hasOwnProperty(robot[key])) {
      return null;
    }
    invertedObject[value] = key;
  }

  return invertedObject;
}

module.exports = inverseRobot;
