'use strict';

/*
 * @param {object} robot
 *
 * @return {object}
*/

function inverseRobot(robot) {
  const spysok = [];
  const arr = [];
  const result = {};

  for (const element in robot) {
    spysok.push(robot[element]);
    result[robot[element]] = element;
  }

  for (const str of spysok) {
    if (!arr.includes(str)) {
      arr.push(str);
    } else {
      return null;
    }
  }

  return result;
}

module.exports = inverseRobot;
