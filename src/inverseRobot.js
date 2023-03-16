'use strict';

/*
 * @param {object} robot
 *
 * @return {object}
*/

function inverseRobot(robot) {
  let array = [];

  // Change object into one array
  Object.entries(robot).forEach(par => {
    array = array.concat(par);
  });

  // check if array constains duplicates
  const checkDuplicates = (new Set(array)).size !== array.length;

  if (checkDuplicates) {
    return null;
  }

  // make arrays from objects keys and swap them;
  const fixRobot = Object.entries(robot).map(([key, value]) => [value, key]);

  // change arrays into object and return
  return Object.fromEntries(fixRobot);
}

module.exports = inverseRobot;
