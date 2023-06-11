"use strict";

/*
 * @param {object} robot
 *
 * @return {object}
 */
function inverseRobot(robot) {
  const keys = Object.values(robot);
  const obj = {};

  for (let i = 0; i < keys.length; i++) {
    const elem = keys[i];

    if (!obj[elem]) {
      obj[elem] = 1;
    } else {
      obj[elem] += 1;
    }
  }

  const values = Object.values(obj).some((item) => item > 1);

  if (values) {
    return null;
  }

  const array = Object.fromEntries(
    Object.entries(robot)
      .reverse()
      .map((item) => item.reverse())
  );

  return array;
}

module.exports = inverseRobot;
