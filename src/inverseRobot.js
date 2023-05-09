'use strict';

/*
 * @param {object} robot
 *
 * @return {object}
*/

function inverseRobot(robot) {
  const reverseObj = Object.entries(robot).reduce((acc, [key, value]) => ({
    ...acc,
    [value]: key,
  }), {});

  return Object.keys(reverseObj).length < Object.values(robot).length
    ? null
    : reverseObj;
}

module.exports = inverseRobot;
