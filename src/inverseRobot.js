'use strict';

/*
 * @param {object} robot
 *
 * @return {object}
*/

function inverseRobot(robot) {
  const robotFixed = {};

  const keys = [];
  const values = [];

  for (const [key, value] of Object.entries(robot)) {
    keys.push(key);
    values.push(value);
  }

  if (values.length !== values.filter((item, index) => values.indexOf(item)
    === index).length) {
    return null;
  }

  for (let i = 0; i < keys.length; i++) {
    robotFixed[values[i]] = keys[i];
  }

  return robotFixed;
}

module.exports = inverseRobot;
