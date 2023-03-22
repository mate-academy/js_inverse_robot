'use strict';

/*
 * @param {object} robot
 *
 * @return {object}
*/

function inverseRobot(robot) {
  // write code here
  return Object.entries(robot).reduce(
    (sum, [key, value]) =>
      !sum || sum[value] ? null : Object.assign(sum, { [value]: key })
    , {}
  );
};

module.exports = inverseRobot;
