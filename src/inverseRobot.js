'use strict';

/*
 * @param {object} robot
 *
 * @return {object}
*/

function inverseRobot(robot) {
  const fixxedRobot = {};

  for (const key in robot) {
    const values = robot[key];

    if (key === 'name') {
      return null;
    }

    fixxedRobot[values] = key;
  }

  return fixxedRobot;
}

module.exports = inverseRobot;
