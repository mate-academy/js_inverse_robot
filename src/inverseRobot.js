'use strict';

/*
 * @param {object} robot
 *
 * @return {object}
*/

function inverseRobot(robot) {
  const values = Object.values(robot);
  const keys = Object.keys(robot);

  for (const elem of values) {
    if (values.indexOf(elem) !== values.lastIndexOf(elem)) {
      return null;
    }
  }

  const resultObj = {};

  for (let i = 0; i < values.length; i++) {
    resultObj[values[i]] = keys[i];
  }

  return resultObj;
}

module.exports = inverseRobot;
