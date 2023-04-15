'use strict';

/*
 * @param {object} robot
 *
 * @return {object}
*/

function inverseRobot(robot) {
  const newRobot = {};
  const values = Object.values(robot);
  const keys = Object.keys(robot);

  for (let i = 0; i < values.length; i++) {
    if (values.indexOf(values[i]) !== values.lastIndexOf(values[i])) {
      return null;
    }
  }

  for (let i = 0; i < keys.length; i++) {
    newRobot[values[i]] = keys[i];
  }

  return newRobot;
}

module.exports = inverseRobot;
