'use strict';

/*
 * @param {object} robot
 *
 * @return {object}
*/

function inverseRobot(robot) {
  const inverseRob = {};
  const values = Object.values(robot);

  if (values.length === 0) {
    return inverseRob;
  }

  for (let i = 0; i < values.length; i++) {
    for (let k = 1; k < values.length; k++) {
      if (values[i] === values[k]) {
        return null;
      }
    }

    for (const key in robot) {
      inverseRob[robot[key]] = key;
    }

    return inverseRob;
  }
}

module.exports = inverseRobot;
