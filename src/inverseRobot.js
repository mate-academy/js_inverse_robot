'use strict';

/*
 * @param {object} robot
 *
 * @return {object}
*/

function inverseRobot(robot) {
  const newObj = {};

  for (const key in robot) {
    const VALUES = robot[key];

    if (newObj.hasOwnProperty(VALUES)) {
      return null;
    }
    newObj[VALUES] = key;
  }

  return newObj;
}

module.exports = inverseRobot;
