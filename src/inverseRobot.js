'use strict';

/*
 * @param {object} robot
 *
 * @return {object}
*/

function inverseRobot(robot) {
  let reversedObject = {};

  for (const key in robot) {
    if (reversedObject.hasOwnProperty(robot[key])) {
      return null;
    }

    reversedObject[robot[key]] = key;
  }

  return reversedObject;
}

module.exports = inverseRobot;
