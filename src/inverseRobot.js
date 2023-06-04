'use strict';

/*
 * @param {object} robot
 *
 * @return {object}
*/

function inverseRobot(robot) {
  const result = {};
  const massKeys = dublicate(Object.keys(robot));
  const massValues = dublicate(Object.values(robot));

  if (massKeys || massValues === null) {
    return null;
  }

  for (const key in robot) {
    result[robot[key]] = key;
  }

  return result;
}

function dublicate(mass) {
  const result = {};

  mass.forEach(element => {
    result[element] = (result[element] || 0) + 1;
  });

  for (const key in result) {
    if (result[key] >= 2) {
      return null;
    }
  }
}

module.exports = inverseRobot;
