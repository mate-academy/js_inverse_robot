'use strict';

/*
 * @param {object} robot
 *
 * @return {object}
*/

function inverseRobot(robot) {
  const invertedRobot = {};

  const equalValue = Object.entries(robot).reduce((acc, [ k, v ]) => {
    if (!acc[v]) {
      acc[v] = [];
    }

    acc[v].push(k);

    return acc;
  },
  {});

  for (const value in equalValue) {
    const lenValue = equalValue[value].length;

    if (lenValue >= 2) {
      return null;
    }
  }

  for (const [key, value] of Object.entries(robot)) {
    invertedRobot[value] = key;
  }

  return invertedRobot;
}

module.exports = inverseRobot;
