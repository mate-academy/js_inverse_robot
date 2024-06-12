'use strict';

/*
 * @param {object} robot
 *
 * @return {object}
*/

function inverseRobot(robot) {
  const inverse = {};
  const inverseKeys = Object.values(robot);
  const inverseValues = Object.keys(robot);

  for (let i = 0; i < inverseKeys.length; i++) {
    if (inverse[inverseKeys[i]]) {
      return null;
    }

    inverse[inverseKeys[i]] = inverseValues[i];
  }

  return inverse;
}

module.exports = inverseRobot;
