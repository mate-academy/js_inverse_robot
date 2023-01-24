'use strict';

/*
 * @param {object} robot
 *
 * @return {object}
 * 1.Object.entries transform object to array
 * 2.map >= reversed key and value and it's still array
 * 3.Object.fromEntries transform array back to object
*/

function inverseRobot(robot) {
  const inversed
    = Object.fromEntries(Object.entries(robot).map(([key, value]) =>
      [value, key]));

  return Object.keys(inversed).length
    < Object.values(robot).length
    ? null
    : inversed;
}

module.exports = inverseRobot;
