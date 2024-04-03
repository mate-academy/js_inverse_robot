'use strict';

/*
 * @param {object} robot
 *
 * @return {object}
*/

function inverseRobot(robot) {
  const inverseObject = {};

  for (const key in robot) {
    if (robot[key] in inverseObject) {
      return null;
    }

    inverseObject[robot[key]] = key;
  }

  return inverseObject;
}

module.exports = inverseRobot;
