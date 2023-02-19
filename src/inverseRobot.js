'use strict';

/*
 * @param {object} robot
 *
 * @return {object}
*/

function inverseRobot(robot) {
  // write code here
  const newObject = {};

  for (const [key, value] of Object.entries(robot)) {
    if (newObject[value]) {
      return null;
    }

    newObject[value] = key;
  }

  return newObject;
}

module.exports = inverseRobot;
