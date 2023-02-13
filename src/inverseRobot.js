'use strict';

/*
 * @param {object} robot
 *
 * @return {object}
*/

function inverseRobot(robot) {
  const reversRobot = {};

  for (const key in robot) {
    reversRobot[robot[key]] = key;
  }

  if (Object.keys(reversRobot).length !== Object.keys(robot).length) {
    return null;
  }

  return reversRobot;
}

module.exports = inverseRobot;
