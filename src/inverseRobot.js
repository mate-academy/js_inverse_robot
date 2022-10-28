'use strict';

/*
 * @param {object} robot
 *
 * @return {object}
*/

function inverseRobot(robot) {
  // write code here
  const lengthOriginal = Array.from(new Set(Object.values(robot))).length;

  if (lengthOriginal === Object.values(robot).length) {
    const inversed = {};

    Object.keys(robot).forEach(key => {
      inversed[robot[key]] = key;
    });

    return inversed;
  }

  return null;
}

module.exports = inverseRobot;
