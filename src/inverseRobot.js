'use strict';

/*
 * @param {object} robot
 *
 * @return {object}
*/

function inverseRobot(robot) {
  const values = {};

  for (const key in robot) {
    if (values.hasOwnProperty([robot[key]])) {
      return null;
    } else {
      values[robot[key]] = key;
    }
  }

  return values;
}

module.exports = inverseRobot;
