'use strict';

/*
 * @param {object} robot
 *
 * @return {object}
*/

function inverseRobot(robot) {
  const first = Object.keys(robot);
  const second = Object.values(robot);
  const newObj = {};

  for (let i = 0; i < second.length; i++) {
    for (let j = i + 1; j < second.length; j++) {
      if (second[i] === second[j]) {
        return null;
      }
    }
  }

  for (let i = 0; i < first.length; i++) {
    newObj[second[i]] = first[i];
  }

  return newObj;
}

module.exports = inverseRobot;
