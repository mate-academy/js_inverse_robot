'use strict';

/*
 * @param {object} robot
 *
 * @return {object}
*/

function inverseRobot(robot) {
  const rusultInverse = {};

  for (const key in robot) {
    const value = robot[key];
    const chek = rusultInverse.hasOwnProperty([value]);

    if (chek) {
      return null;
    }

    rusultInverse[value] = key;
  }

  return rusultInverse;
}

module.exports = inverseRobot;
