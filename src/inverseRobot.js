'use strict';

/*
 * @param {object} robot
 *
 * @return {object}
*/

function inverseRobot(robot) {
  const inversedRobot = {};

  if (Object.keys(robot).length === 0) {
    return inversedRobot;
  }

  for (const el in robot) {
    if (Object.keys(inversedRobot).includes(robot[el])) {
      return null;
    }
    inversedRobot[robot[el]] = el;
  }

  return inversedRobot;
}

module.exports = inverseRobot;
