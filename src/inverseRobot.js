'use strict';

/*
 * @param {object} robot
 *
 * @return {object}
*/

function inverseRobot(robot) {
  const arr = Object.entries(robot);

  const revers = arr.map(function(i) {
    return i.reverse();
  });

  const objRevers = Object.fromEntries(revers);

  if (Object.keys(objRevers).length !== Object.keys(robot).length) {
    return null;
  }

  return objRevers;
}

module.exports = inverseRobot;
