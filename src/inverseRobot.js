'use strict';

/*
 * @param {object} robot
 *
 * @return {object}
*/

function inverseRobot(robot) {
  const revers = {};
  const keys = Object.keys(robot);
  const values = Object.values(robot);

  for (let i = 0; i < keys.length; i++) {
    if (keys.includes(keys[i], i + 1)) {
      return null;
    }
  }

  for (let i = 0; i < values.length; i++) {
    if (values.includes(values[i], i + 1)) {
      return null;
    }
  }

  for (const key in robot) {
    revers[robot[key]] = key;
  };

  return revers;
}
module.exports = inverseRobot;
