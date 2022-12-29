'use strict';

/*
 * @param {object} robot
 *
 * @return {object}
*/

function inverseRobot(robot) {
  const keys = Object.keys(robot);
  const values = Object.values(robot);
  const finalRobot = {};

  for (let i = 0; i < values.length; i++) {
    if (values.includes(values[i], i + 1)) {
      return null;
    }
  }

  for (let i = 0; i < values.length; i++) {
    finalRobot[values[i]] = keys[i];
  }

  return finalRobot;
}

module.exports = inverseRobot;
