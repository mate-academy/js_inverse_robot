'use strict';

/*
 * @param {object} robot
 *
 * @return {object}
*/

function inverseRobot(robot) {
  const result = {};

  for (const prop in robot) {
    if (result.hasOwnProperty([robot[prop]])) {
      return null;
    }

    result[robot[prop]] = prop;
  }

  return result;
}

module.exports = inverseRobot;
