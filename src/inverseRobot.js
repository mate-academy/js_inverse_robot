'use strict';

/*
 * @param {object} robot
 *
 * @return {object}
*/

function inverseRobot(robot) {
  const inverse = {};
  let roboKey;

  for (const key in robot) {
    roboKey = robot[key];

    if (inverse.hasOwnProperty(roboKey)) {
      return null;
    }
    inverse[roboKey] = key;
  }

  return inverse;
}

module.exports = inverseRobot;
