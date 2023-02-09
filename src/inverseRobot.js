'use strict';

/*
 * @param {object} robot
 *
 * @return {object}
*/

function inverseRobot(robot) {
  const reverse = Object.entries(robot).map(([value, key]) => [key, value]);

  const flatted = reverse.flat();
  const uniqueParts = flatted
    .filter((element, index, array) => array.indexOf(element)
    === index);

  if (flatted.length !== uniqueParts.length) {
    return null;
  } else {
    return Object.fromEntries(reverse);
  }
}

module.exports = inverseRobot;
