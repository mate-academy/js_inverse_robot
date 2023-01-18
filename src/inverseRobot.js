'use strict';

/*
 * @param {object} robot
 *
 * @return {object}
*/

function inverseRobot(robot) {
  return Object.entries(robot).reduce((accum, [key, value]) =>
    !accum || accum[value] ? null : Object.assign(accum, { [value]: key }), {}
  );
}

module.exports = inverseRobot;
