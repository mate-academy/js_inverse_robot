'use strict';

/*
 * @param {object} robot
 *
 * @return {object}
*/

function inverseRobot(robot) {
  const res = {};

  Object.keys(robot).forEach(function(value) {
    const key = robot[value];

    res[key] = value;
  });

  if (Object.keys(res).length < Object.keys(robot).length) {
    return null;
  }

  return res;
}

module.exports = inverseRobot;
