'use strict';

/*
 * @param {object} robot
 *
 * @return {object}
*/

function inverseRobot(robot) {
  // write code here
  const keys = Object.values(robot);
  const uniqueKeys = new Set(keys);

  if (keys.length !== uniqueKeys.size) {
    return null;
  }

  const values = Object.keys(robot);
  const invertedRobot = {};

  for (let i = 0; i < keys.length; i++) {
    invertedRobot[keys[i]] = values[i];
  }

  return invertedRobot;
}

module.exports = inverseRobot;
