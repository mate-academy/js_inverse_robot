'use strict';

/*
 * @param {object} robot
 *
 * @return {object}
*/

function inverseRobot(robot) {
  const switchPlace = {};

  for (const key in robot) {
    const value = robot[key];

    if (switchPlace.hasOwnProperty(value)) {
      return null;
    }

    switchPlace[value] = key;
  }

  return switchPlace;
}

module.exports = inverseRobot;
