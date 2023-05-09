'use strict';

/*
 * @param {object} robot
 *
 * @return {object}
*/

function inverseRobot(robot) {
  const copy = {};
  const values = Object.values(robot);

  for (const key in robot) {
    const val = robot[key];

    if (values.indexOf(val) !== values.lastIndexOf(val)) {
      return null;
    }
    copy[val] = key;
  }

  return copy;
}
module.exports = inverseRobot;
