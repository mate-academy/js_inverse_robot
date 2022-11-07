'use strict';

/*
 * @param {object} robot
 *
 * @return {object}
 */

function inverseRobot(robot) {
  const result = {};

  const toArray = Object.entries(robot);

  for (const key of toArray) {
    result[key[1]] = key[0];
  }

  if (Object.keys(result).length < Object.values(robot).length) {
    return null;
  } else {
    return result;
  }
}

module.exports = inverseRobot;
