'use strict';

/*
 * @param {object} robot
 *
 * @return {object}
*/

function inverseRobot(robot) {
  const newObject = {};

  for (const [key, value] of Object.entries(robot)) {
    if (newObject[value] === undefined) {
      newObject[value] = key;
    } else {
      return null;
    }
  }

  return newObject;
}

module.exports = inverseRobot;
