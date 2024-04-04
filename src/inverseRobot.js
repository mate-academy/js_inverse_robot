'use strict';

/*
 * @param {object} robot
 *
 * @return {object}
*/

function inverseRobot(robot) {
  const newObject = {};

  for (const key of Object.keys(robot)) {
    const value = robot[key];

    if (!newObject.hasOwnProperty(value)) {
      newObject[value] = key;
    } else {
      return null;
    }
  }

  return newObject;
}

module.exports = inverseRobot;
