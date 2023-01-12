'use strict';

/*
 * @param {object} robot
 *
 * @return {object}
*/

function inverseRobot(robot) {
  const inversus = {};

  for (const key in robot) {
    const inversusvalue = key;
    const inversuskey = robot[key];

    if (inversus.hasOwnProperty(inversuskey)) {
      return null;
    }
    inversus[inversuskey] = inversusvalue;
  }

  return inversus;
}

module.exports = inverseRobot;
