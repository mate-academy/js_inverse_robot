'use strict';

/*
 * @param {object} robot
 *
 * @return {object}
*/

function inverseRobot(robot) {
  let robotInverse = {};

  for (const [newValue, newKey] of Object.entries(robot)) {
    if (checkRepeats(newKey, newValue)) {
      robotInverse = null;

      return robotInverse;
    } else {
      robotInverse[newKey] = newValue;
    }
  }

  function checkRepeats(currentKey, currentValue) {
    for (const [key, value] of Object.entries(robotInverse)) {
      if (currentKey === key || currentValue === value) {
        return true;
      }
    }

    return false;
  }

  return robotInverse;
}

module.exports = inverseRobot;
