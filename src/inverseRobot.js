'use strict';

/*
 * @param {object} robot
 *
 * @return {object}
*/

function inverseRobot(robot) {
  const newRob = {};

  for (const key in robot) {
    newRob[robot[key]] = key;
  }

  if (Object.keys(newRob).length !== Object.values(robot).length) {
    return null;
  }

  return newRob;
}

module.exports = inverseRobot;
