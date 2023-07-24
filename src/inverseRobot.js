'use strict';

/*
 * @param {object} robot
 *
 * @return {object}
*/

function inverseRobot(robot) {
  const reversedRobot = {};

  for (const key in robot) {
    const value = robot[key];

    reversedRobot[value] = key;
  }

  if (Object.values(reversedRobot).length < Object.values(robot).length) {
    return null;
  }

  return reversedRobot;
}

module.exports = inverseRobot;
