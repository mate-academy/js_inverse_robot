'use strict';

/*
 * @param {object} robot
 *
 * @return {object}
*/

function inverseRobot(robot) {
  const newRobot = {};

  for (const prop in robot) {
    if (newRobot[robot[prop]]) {
      return null;
    }

    newRobot[robot[prop]] = prop;
  }

  return newRobot;
}

module.exports = inverseRobot;
