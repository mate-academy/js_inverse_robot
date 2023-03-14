'use strict';

/*
 * @param {object} robot
 *
 * @return {object}
*/

function inverseRobot(robot) {
  const res = {};

  for (const [key, value] of Object.entries(robot)) {
    if (value in res) {
      return null;
    }

    res[value] = key;
  }

  return res;
}

module.exports = inverseRobot;
