'use strict';

/*
 * @param {object} robot
 *
 * @return {object}
*/

function inverseRobot(robot) {
  const invertedRobot = {};
  const values = Object.values(robot);

  for (const key in robot) {
    const value = robot[key];

    let count = 0;

    for (const val of values) {
      if (val === value) {
        count++;

        if (count > 1) {
          return null;
        }
      }
    }

    invertedRobot[value] = key;
  }

  return invertedRobot;
}

module.exports = inverseRobot;
