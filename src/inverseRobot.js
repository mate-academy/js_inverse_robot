'use strict';

/*
 * @param {object} robot
 *
 * @return {object}
*/

function inverseRobot(robot) {
  const inversus = {};

  for (const key in robot) {
    if (inversus.hasOwnProperty(robot[key])) {
      return null;
    }

    inversus[robot[key]] = key;
  }

  return inversus;
}

module.exports = inverseRobot;
