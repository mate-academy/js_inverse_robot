'use strict';

/*
 * @param {object} robot
 *
 * @return {object}
*/

function inverseRobot(robot) {
  const fixedRobot = {};
  const values = Object.keys(robot);
  const keys = Object.values(robot);

  for (let i = 0; i < keys.length; i++) {
    for (let j = i + 1; j < keys.length; j++) {
      if (keys[i] === keys[j]) {
        return null;
      }
    }
  }

  for (let i = 0; i < keys.length; i++) {
    fixedRobot[keys[i]] = values[i];
  }

  return fixedRobot;
}

module.exports = inverseRobot;
