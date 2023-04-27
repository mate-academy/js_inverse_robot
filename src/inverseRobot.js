'use strict';

/*
 * @param {object} robot
 *
 * @return {object}
*/

function inverseRobot(robot) {
  const arr = [];

  for (const i of Object.entries(robot)) {
    arr.push(i.reverse());
  };

  const res = Object.fromEntries(arr);

  return Object.keys(res).length < Object.values(robot).length ? null : res;
}

module.exports = inverseRobot;
