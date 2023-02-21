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
    testRepeat.push(robot[key]);
    value.push(key);
  }

  for (let i = 0; i < testRepeat.length - 1; i++) {
    if (testRepeat.lastIndexOf(testRepeat[i]) !== i) {
      return null;
    }
  }

  for (let j = 0; j < value.length; j++) {
    resalt[testRepeat[j]] = value[j];
  }

  return resalt;
}

module.exports = inverseRobot;
