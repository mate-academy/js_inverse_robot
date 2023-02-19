'use strict';

/*
 * @param {object} robot
 *
 * @return {object}
*/
function inverseRobot(robot) {
  const obj = {};
  let finTest = 0;

  Object.values(robot).forEach((value, i, arr) => {
    const x = value;

    delete arr[i];

    if (arr.includes(x)) {
      finTest = null;
    };
  });

  for (const key in robot) {
    obj[robot[key]] = key;
  }

  return finTest === null ? null : obj;
}

module.exports = inverseRobot;
