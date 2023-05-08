'use strict';

/*
 * @param {object} robot
 *
 * @return {object}
*/

function inverseRobot(robot) {
  const inverse = {};

  for (const key in robot) {
    if (inverse.hasOwnProperty(robot[key])) {
      return null;
    }
    inverse[robot[key]] = key;
  }

  return inverse;
}

// inverseRobot({
//   Robert: 'name', 123: 'chipVer', 113: 'chipVer',
// });

module.exports = inverseRobot;
