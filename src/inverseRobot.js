'use strict';

/*
 * @param {object} robot
 *
 * @return {object}
*/

function inverseRobot(robot) {
  const switchPlace = {};

  for (const key in robot) {
    if (switchPlace.hasOwnProperty(robot[key])) {
      return null;
    }

    switchPlace[robot[key]] = key;
  }

  return switchPlace;
}

module.exports = inverseRobot;
