'use strict';

/*
 * @param {object} robot
 *
 * @return {object}
*/

function inverseRobot(robot) {
  const valuesRobot = Object.values(robot);
  let inverse = {};
  let sum = 0;

  for (const key in robot) {
    inverse[robot[key]] = key;
  }

  for (const key in inverse) {
    valuesRobot.forEach(function(elem) {
      if (elem === key) {
        sum++;
      }
    });

    if (sum > 1) {
      inverse = null;
    } else {
      sum = 0;
    }
  }

  return inverse;
}

module.exports = inverseRobot;
