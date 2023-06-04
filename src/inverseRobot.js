'use strict';

/*
 * @param {object} robot
 *
 * @return {object}
*/

function inverseRobot(robot) {
  const result = {};
  const massKeys = duplicate(Object.keys(robot));
  const massValues = duplicate(Object.values(robot));

  if (massKeys === null || massValues === null) {
    return null;
  }

  for (const key in robot) {
    result[robot[key]] = key;
  }

  return result;
}

function duplicate(array) {
  const result = {};

  array.forEach(element => {
    result[element] = (result[element] || 0) + 1;
  });

  for (const key in result) {
    if (result[key] >= 2) {
      return null;
    }
  }
}

module.exports = inverseRobot;
