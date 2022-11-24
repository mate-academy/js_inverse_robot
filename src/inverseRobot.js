'use strict';

/*
 * @param {object} robot
 *
 * @return {object}
*/

function inverseRobot(robot) {
  // write code here
  const inverseCopy = {};

  const length = Object.keys(robot).length;

  for (let i = 0; i < length; i++) {
    let dupliCount = 0;

    for (let j = 0; j < length; j++) {
      if (Object.values(robot)[i] === Object.values(robot)[j]) {
        dupliCount++;
      }
    }

    if (dupliCount > 1) {
      return null;
    }
  }

  for (let i = 0; i < length; i++) {
    const key = Object.keys(robot)[i];

    inverseCopy[robot[key]] = key;
  }

  return inverseCopy;
}

module.exports = inverseRobot;
