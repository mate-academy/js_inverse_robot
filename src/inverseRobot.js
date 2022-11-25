'use strict';

/*
 * @param {object} robot
 *
 * @return {object}
*/

function inverseRobot(robot) {
  const mirrorRobot = {};

  for (const key in robot) {
    const mirrorKey = robot[key];

    if (mirrorRobot.hasOwnProperty(mirrorKey)) {
      return null;
    }

    mirrorRobot[mirrorKey] = key;
  }

  return mirrorRobot;
}

module.exports = inverseRobot;
