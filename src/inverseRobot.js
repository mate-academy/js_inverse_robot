'use strict';

/*
 * @param {object} robot
 *
 * @return {object}
*/

function inverseRobot(robot) {
  const values = Object.values(robot);

  for (let i = 0; i < values.length; i++) {
    if (i !== values.lastIndexOf(values[i])) {
      return null;
    }
  }

  const arrayOfEntries = Object.entries(robot);
  const swappedArray = arrayOfEntries.map(([value, key]) => [key, value]);
  const fixedRobot = Object.fromEntries(swappedArray);

  return fixedRobot;
}

module.exports = inverseRobot;
