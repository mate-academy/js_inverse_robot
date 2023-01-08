'use strict';

/*
 * @param {object} robot
 *
 * @return {object}
 */

function inverseRobot(robot) {
  // write code here
  const key = Object.keys(robot);
  const values = Object.values(robot);
  const reverse = {};

  for (let i = 0; i < key.length; i++) {
    reverse[values[i]] = key[i];

    if (values[i] === values[i + 1]) {
      return null;
    }

    if (values.includes(values[i], i + 1)) {
      return null;
    }
  }

  return reverse;
}

module.exports = inverseRobot;
