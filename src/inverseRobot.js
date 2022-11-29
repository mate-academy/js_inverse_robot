'use strict';

/*
 * @param {object} robot
 *
 * @return {object}
*/

function inverseRobot(robot) {
  const inversedRobot = {};
  const arrKeys = Object.keys(robot);
  const arrValues = Object.values(robot);

  for (let i = 0; i < arrValues.length; i++) {
    for (let j = i + 1; j < arrValues.length; j++) {
      if (arrValues[i] === arrValues[j]) {
        return null;
      }
    }

    inversedRobot[arrValues[i]] = arrKeys[i];
  }

  return inversedRobot;
}

module.exports = inverseRobot;
