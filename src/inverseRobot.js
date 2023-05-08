'use strict';

/*
 * @param {object} robot
 *
 * @return {object}
*/

function inverseRobot(robot) {
  let newRobot = {};
  const values = Object.keys(robot);
  const keys = Object.values(robot);

  for (let x = 0; x < keys.length - 1; x++) {
    let j = 1;

    if (x > 0) {
      j += x;
    }

    for (j; j < keys.length; j++) {
      if (keys[x] !== keys[j]) {
        continue;
      }
      newRobot = null;

      return newRobot;
    }
  }

  for (let i = 0; i < keys.length; i++) {
    newRobot[keys[i]] = values[i];
  }

  return newRobot;
}

module.exports = inverseRobot;
