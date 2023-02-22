'use strict';

/*
 * @param {object} robot
 *
 * @return {object}
*/

function inverseRobot(robot) {
  const testRepeat = [];
  const value = [];
  const resalt = {};

  for (const key in robot) {
    if (testRepeat.includes(robot[key])) {
      return null;
    }
    testRepeat.push(robot[key]);
    value.push(key);
  }

  for (let j = 0; j < value.length; j++) {
    resalt[testRepeat[j]] = value[j];
  }

  return resalt;
}

module.exports = inverseRobot;
