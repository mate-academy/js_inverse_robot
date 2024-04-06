'use strict';

/*
 * @param {object} robot
 *
 * @return {object}
*/

function inverseRobot(robot) {
  const ob = {};

  for (const key in robot) {
    ob[robot[key]] = key;
  }

  if (Object.keys(ob).length !== Object.keys(robot).length) {
    return null;
  }

  return ob;
}

module.exports = inverseRobot;
