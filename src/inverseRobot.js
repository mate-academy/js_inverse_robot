'use strict';

/*
 * @param {object} robot
 *
 * @return {object}
*/

function inverseRobot(robot) {
  const fixedRobot = {};

  const keys = Object.keys(robot);

  const values = Object.values(robot);

  for (let i = 0; i < keys.length; i++) {
    const checkKeys = keys.indexOf(keys[i], i + 1);

    const checkValues = values.indexOf(values[i], i + 1);

    if (checkKeys > -1 || checkValues > -1) {
      return null;
    }
  }

  for (let i = 0; i < values.length; i++) {
    fixedRobot[values[i]] = keys[i];
  }

  return fixedRobot;
}

module.exports = inverseRobot;
