'use strict';

/*
 * @param {object} robot
 *
 * @return {object}
*/

function inverseRobot(robot) {
  const reversRobot = {};

  for (const key in robot) {
    if (reversRobot[robot[key]]) {
      return null;
    }

    reversRobot[robot[key]] = key;
  }

  return reversRobot;
}

module.exports = inverseRobot;
