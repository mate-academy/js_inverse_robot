'use strict';

/*
 * @param {object} robot
 *
 * @return {object}
*/

function inverseRobot(robot) {
  const keys = Object.keys(robot);
  const values = Object.values(robot);
  const newOb = {};

  for (let i = 0; i < values.length - 1; i++) {
    for (let j = i + 1; j < values.length; j++) {
      if (values[i] === values[j]) {
        return null;
      }
    }
  }

  for (let k = 0; k < values.length; k++) {
    newOb[`${values[k]}`] = keys[k];
  }

  return newOb;
}

module.exports = inverseRobot;
