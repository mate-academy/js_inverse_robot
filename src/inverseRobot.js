'use strict';

/*
 * @param {object} robot
 *
 * @return {object}
*/

function inverseRobot(robot) {
  const result = {};
  const values = Object.values(robot);

  for (let i = 0; i < values.length; i++) {
    if (values
      .slice(i + 1, values.length)
      .includes(values[i])) {
      return null;
    }
  }

  for (const key in robot) {
    result[robot[key]] = key;
  }

  return result;
}

module.exports = inverseRobot;
