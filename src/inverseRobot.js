'use strict';

/*
 * @param {object} robot
 *
 * @return {object}
 */

function inverseRobot(robot) {
  const values = Object.values(robot);
  const uniqueValues = Array.from(new Set(values));

  if (values.length !== uniqueValues.length) {
    return null;
  }

  const finalObj = {};

  for (const key in robot) {
    finalObj[robot[key]] = key;
  }

  return finalObj;
}

module.exports = inverseRobot;
