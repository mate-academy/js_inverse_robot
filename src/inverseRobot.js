'use strict';

/*
 * @param {object} robot
 *
 * @return {object}
*/

function inverseRobot(robot) {
  const inversed = {};

  const keys = Object.values(robot);
  const filteredKeys = [...new Set(keys)];
  const values = Object.keys(robot);

  if (filteredKeys.length !== keys.length) {
    return null;
  }

  for (let i = 0; i < filteredKeys.length; i++) {
    inversed[filteredKeys[i]] = values[i];
  }

  return inversed;
}

module.exports = inverseRobot;
