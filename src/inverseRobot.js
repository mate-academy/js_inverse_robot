'use strict';

/*
 * @param {object} robot
 *
 * @return {object}
*/

function inverseRobot(robot) {
  const robotSwitched = {};
  const values = Object.values(robot);
  const keys = Object.keys(robot);

  const unique = Array.from(new Set(values));

  if (values.length > unique.length) {
    return null;
  }

  values.forEach((value, key) => {
    robotSwitched[value] = keys[key];
  });

  return robotSwitched;
}

module.exports = inverseRobot;
