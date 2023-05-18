'use strict';

/*
 * @param {object} robot
 *
 * @return {object}
*/

function inverseRobot(robot) {
  const invertedRobot = {};

  for (const key in robot) {
    const property = robot[key];

    if (invertedRobot.hasOwnProperty(property)) {
      return null;
    }
    invertedRobot[property] = key;
  }

  return invertedRobot;
}

module.exports = inverseRobot;
