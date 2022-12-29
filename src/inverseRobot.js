'use strict';

/*
 * @param {object} robot
 *
 * @return {object}
*/

function inverseRobot(robot) {
  const keys = Object.keys(robot);
  const values = Object.values(robot);

  let count = 0;

  for (let i = 0; i < values.length; i++) {
    if (count > 1) {
      return null;
    }

    count = 0;

    for (let j = 0; j < values.length; j++) {
      if (values[i] === values[j]) {
        count++;
      }
    }
  }

  const obj = {};

  for (let i = 0; i < keys.length; i++) {
    obj[values[i]] = keys[i];
  }

  return obj;
}

module.exports = inverseRobot;
