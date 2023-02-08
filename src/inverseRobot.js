'use strict';

/*
 * @param {object} robot
 *
 * @return {object}
*/

function inverseRobot(robot) {
  const newObj = {};

  for (const prop in robot) {
    if (newObj[robot[prop]]) {
      return null;
    }

    newObj[robot[prop]] = prop;
  }

  return newObj;
}

module.exports = inverseRobot;
