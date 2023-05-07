'use strict';

/*
 * @param {object} robot
 *
 * @return {object}
*/

function inverseRobot(robot) {
  const inverted = {};

  for (const prop in robot) {
    if (inverted.hasOwnProperty([robot[prop]])) {
      return null;
    }

    inverted[robot[prop]] = prop;
  }

  return inverted;
}

module.exports = inverseRobot;
