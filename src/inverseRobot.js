'use strict';

/*
 * @param {object} robot
 *
 * @return {object}
*/

function inverseRobot(robot) {
  const initialKeys = Object.keys(robot);

  for (let i = 0; i < initialKeys.length; i++) {
    for (let j = i + 1; j < initialKeys.length; j++) {
      if (robot[initialKeys[i]] === robot[initialKeys[j]]) {
        return null;
      }
    }
  }

  for (const key in robot) {
    const reversedKey = robot[key];

    delete robot[key];
    robot[reversedKey] = key;
  }

  return robot;
}

module.exports = inverseRobot;
