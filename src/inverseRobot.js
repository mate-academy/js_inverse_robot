'use strict';

/*
 * @param {object} robot
 *
 * @return {object}
*/

function inverseRobot(robot) {
  const reversedObject = {};

  for (const key in robot) {
    if (robot[key] in reversedObject) {
      return null;
    }

    reversedObject[robot[key]] = key;
  }

  return reversedObject;
}

module.exports = inverseRobot;
