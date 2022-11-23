'use strict';

/*
 * @param {object} robot
 *
 * @return {object}
*/

function inverseRobot(robot) {
  const adequateRobot = {};

  for (const key in robot) {
    const adequateKey = robot[key];

    if (adequateRobot.hasOwnProperty(adequateKey)) {
      return null;
    }

    adequateRobot[adequateKey] = key;
  }

  return adequateRobot;
}

module.exports = inverseRobot;
