'use strict';

/*
 * @param {object} robot
 *
 * @return {object}
*/

function inverseRobot(robot) {
  const arrayValues = Object.values(robot);

  for (let i = 0; i < arrayValues.length; i++) {
    for (let j = i + 1; j < arrayValues.length; j++) {
      if (arrayValues[i] === arrayValues[j]) {
        return null;
      }
    }
  }

  const repairRobot = {};

  for (const key in robot) {
    const VALUE = robot[key];

    repairRobot[VALUE] = key;
  }

  return repairRobot;
}

module.exports = inverseRobot;
