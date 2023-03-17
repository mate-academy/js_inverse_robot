/* eslint-disable no-param-reassign */
'use strict';

/*
 * @param {object} robot
 *
 * @return {object}
*/

function inverseRobot(robot) {
  for (const key in robot) {
    const property = robot[key];
    let count = 0;

    for (const key2 in robot) {
      if (robot[key2] === property) {
        count++;
      }
    };

    if (count !== 1) {
      return (robot = null);
    }
  }

  for (const key in robot) {
    robot[`${(robot[key])}`] = key;
    delete robot[key];
  }

  return robot;
}

module.exports = inverseRobot;
