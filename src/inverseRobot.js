'use strict';

/*
 * @param {object} robot
 *
 * @return {object}
*/

function inverseRobot(robot) {
  const reversedObj = {};

  for (const key in robot) {
    reversedObj[robot[key]] = key;
  }

  if (Object.keys(reversedObj).length !== Object.keys(robot).length) {
    return null;
  }

  return reversedObj;
}

module.exports = inverseRobot;
