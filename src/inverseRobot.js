/* eslint-disable quotes */
"use strict";

/*
 * @param {object} robot
 *
 * @return {object}
 */

function inverseRobot(robot) {
  // write code here
  const res = {};
  const valuesArr = Object.values(robot);
  const isValuesRepeated = valuesArr.some(
    (item, index) => valuesArr.indexOf(item) !== index
  );

  if (isValuesRepeated) {
    return null;
  }

  for (const key in robot) {
    res[robot[key]] = key;
  }

  return res;
}

module.exports = inverseRobot;
