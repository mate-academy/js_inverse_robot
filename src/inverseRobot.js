'use strict';

/*
 * @param {object} robot
 *
 * @return {object}
*/

function inverseRobot(robot) {
  const invertRobot = {};

  for (const key in robot) {
    const property = robot[key];

    if (invertRobot.hasOwnProperty(property)) {
      return null;
    } else {
      invertRobot[property] = key;
    }
  }

  return invertRobot;
}

module.exports = inverseRobot;
