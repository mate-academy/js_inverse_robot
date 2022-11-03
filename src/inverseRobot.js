'use strict';

/*
 * @param {object} robot
 *
 * @return {object}
*/

function inverseRobot(robot) {
  const newObject = {};

  for (const key in robot) {
    if (newObject[robot[key]]) {
      return null;
    }

    newObject[robot[key]] = key;
  }

  return newObject;
}

module.exports = inverseRobot;
