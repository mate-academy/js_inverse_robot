'use strict';

/*
 * @param {object} robot
 *
 * @return {object}
 */

function inverseRobot(robot) {
  const obj = {};

  const arr = Object.values(robot);

  const isDuplicate = arr.some((item, index) => index !== arr.indexOf(item));

  if (isDuplicate) {
    return null;
  }

  for (const key in robot) {
    obj[robot[key]] = key;
  }

  return obj;
}

module.exports = inverseRobot;
