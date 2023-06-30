'use strict';

/*
 * @param {object} robot
 *
 * @return {object}
*/

function inverseRobot(robot) {
  const values = Object.values(robot);
  const uniqueValues = new Set(values);

  if (values.length !== uniqueValues.size) {
    return null;
  }

  const repeatedObj = {};

  for (const key in robot) {
    repeatedObj[robot[key]] = key;
  }

  return repeatedObj;
}

module.exports = inverseRobot;
