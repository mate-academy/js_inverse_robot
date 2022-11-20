'use strict';

/*
 * @param {object} robot
 *
 * @return {object}
*/

function inverseRobot(robot) {
  const reverseObject = {};

  for (const key in robot) {
    if (robot[key] in reverseObject) {
      return null;
    } else {
      reverseObject[robot[key]] = key;
    }
  }

  return reverseObject;
}

module.exports = inverseRobot;
