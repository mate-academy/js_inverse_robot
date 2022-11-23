'use strict';

/*
 * @param {object} robot
 *
 * @return {object}
*/

function inverseRobot(robot) {
  const obj = {};

  for (const key in robot) {
    const property = robot[key];

    if (obj.hasOwnProperty(property)) {
      return null;
    } else {
      obj[property] = key;
    }
  }

  return obj;
}

module.exports = inverseRobot;
