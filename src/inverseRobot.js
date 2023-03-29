'use strict';

/*
 * @param {object} robot
 *
 * @return {object}
*/

function inverseRobot(robot) {
  // write code here
  const inverted = {};
  const roKeys = Object.keys(robot);
  const roVals = Object.values(robot);

  for (let i = 0; i < roKeys.length; i++) {
    if (roVals[i] in inverted) {
      return null;
    }

    inverted[roVals[i]] = roKeys[i];
  }

  return inverted;
}

module.exports = inverseRobot;
