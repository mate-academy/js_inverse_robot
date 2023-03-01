'use strict';

/*
 * @param {object} robot
 *
 * @return {object}
*/

function inverseRobot(robot) {
  // write code here
  const newObj = {};
  const keys = Object.values(robot);

  for (let i = 0; i < keys.length; i++) {
    for (let j = i + 1; j < keys.length; j++) {
      if (keys[i] === keys[j]) {
        return null;
      }
    }
  }

  for (const key in robot) {
    newObj[robot[key]] = key;
  }

  return newObj;
}

module.exports = inverseRobot;
