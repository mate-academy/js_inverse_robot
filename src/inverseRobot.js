'use strict';

/*
 * @param {object} robot
 *
 * @return {object}
*/

function inverseRobot(robot) {
  const robotReverse = {};

  for (const element of Object.entries(robot)) {
    const [value, key] = element;

    if (key in robotReverse) {
      return null;
    }

    robotReverse[key] = value;
  }

  return robotReverse;
}

module.exports = inverseRobot;
