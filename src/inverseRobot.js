'use strict';

/*
 * @param {object} robot
 *
 * @return {object}
*/

function inverseRobot(robot) {
  const newRobot = {};

  for (const parts in robot) {
    if (newRobot.hasOwnProperty([robot[parts]])) {
      return null;
    }

    newRobot[robot[parts]] = parts;
  }

  return newRobot;
}

module.exports = inverseRobot;
