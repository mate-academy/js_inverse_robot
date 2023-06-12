'use strict';

/*
 * @param {object} robot
 *
 * @return {object}
*/

function inverseRobot(robot) {
  // write code here
  const resultInverse = {};

  for (const property in robot) {
    if (resultInverse.hasOwnProperty(robot[property])) {
      return null;
    }

    resultInverse[robot[property]] = property;
  }

  return resultInverse;
}

module.exports = inverseRobot;
