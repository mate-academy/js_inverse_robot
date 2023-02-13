'use strict';

/*
 * @param {object} robot
 *
 * @return {object}
*/

function inverseRobot(robot) {
  const arrayKeys = {};
  const rezult = [];
  const array = [];

  for (const key in robot) {
    arrayKeys[robot[key]] = key;
    rezult.push(robot[key]);
  }

  for (const str of rezult) {
    if (array.includes(str)) {
      return null;
    } else {
      array.push(str);
    }
  }

  return arrayKeys;
}

module.exports = inverseRobot;
