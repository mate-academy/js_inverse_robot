'use strict';

/*
 * @param {object} robot
 *
 * @return {object}
*/

function inverseRobot(robot) {
  const obj = {};
  const values = Object.values(robot);

  for (let i = 0; i < values.length; i++) {
    const x = values[i];

    delete values[i];

    if (values.includes(x)) {
      return null;
    };
  }

  for (const key in robot) {
    obj[robot[key]] = key;
  }

  return obj;
}

module.exports = inverseRobot;
