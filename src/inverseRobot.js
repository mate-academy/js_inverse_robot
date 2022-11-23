'use strict';

/*
 * @param {object} robot
 *
 * @return {object}
*/

function inverseRobot(robot) {
  // write code here
  let count = 0;
  const k = [];

  for (const key in robot) {
    count++;
    k.push(key);
  }

  for (let i = 0; i < count; i++) {
    for (let j = i + 1; j < count; j++) {
      if (Object.values(robot)[i] === Object.values(robot)[j]) {
        return null;
      }
    }
  }

  const result = {};

  for (const key in robot) {
    result[robot[key]] = key;
  }

  return result;
}

module.exports = inverseRobot;
