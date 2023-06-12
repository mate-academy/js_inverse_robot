'use strict';

/*
 * @param {object} robot
 *
 * @return {object}
*/

function inverseRobot(robot) {
  // write code here
  const values = Object.values(robot);
  const uniqueValues = [...new Set(values)];

  if (uniqueValues.length !== values.length) {
    return null;
  }

  const newObject = {};

  for (const key in robot) {
    newObject[robot[key]] = key;
  }

  return newObject;
}

module.exports = inverseRobot;
