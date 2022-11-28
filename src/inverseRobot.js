'use strict';

/*
 * @param {object} robot
 *
 * @return {object}
*/

function inverseRobot(robot) {
  const array = Object.values(robot);

  for (let i = 0; i < array.length - 1; i++) {
    for (let j = i + 1; j < array.length; j++) {
      if (array[i] === array[j]) {
        return null;
      }
    }
  }

  const result = Object.fromEntries(Object.entries(robot)
    .map(([key, value]) => [value, key]));

  return result;
}

module.exports = inverseRobot;
