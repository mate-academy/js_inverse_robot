'use strict';

/*
 * @param {object} robot
 *
 * @return {object}
*/

function inverseRobot(robot) {
  if (!robot) {
    return null;
  }

  const formattedRobot = {};

  for (const key in robot) {
    const newKey = robot[key];

    if (formattedRobot.hasOwnProperty(newKey)) {
      return null;
    }

    formattedRobot[newKey] = key;
  }

  return formattedRobot;
}

module.exports = inverseRobot;
