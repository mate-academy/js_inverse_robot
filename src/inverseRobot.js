'use strict';

/*
 * @param {object} robot
 *
 * @return {object}
*/

function inverseRobot(robot) {
  const arrayValues = Object.values(robot);

  for (let i = 0; i <= arrayValues.length; i++) {
    let count = 0;
    const elementI = arrayValues[i];

    for (let j = 0; j <= arrayValues.length; j++) {
      if (elementI === arrayValues[j]) {
        count++;
      }
    }

    if (count === 2) {
      return null;
    }
  }

  for (let key in robot) {
    const savedKey = key;
    const savedValue = robot[key];

    delete robot[key];
    key = savedValue;
    robot[key] = savedKey;
  }

  return robot;
}

module.exports = inverseRobot;
