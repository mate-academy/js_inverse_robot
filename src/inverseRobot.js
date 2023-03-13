'use strict';

/*
 * @param {object} robot
 *
 * @return {object}
*/

function inverseRobot(robot) {
  const arr = Object.entries(robot);

  arr.forEach(element => {
    element.reverse();
  });

  const obj = Object.fromEntries(arr);

  if (Object.keys(robot).length !== Object.keys(obj).length) {
    return null;
  }

  return obj;
}

module.exports = inverseRobot;
