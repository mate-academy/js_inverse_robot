'use strict';

/*
 * @param {object} robot
 *
 * @return {object}
*/

function inverseRobot(robot) {
  const arrOfParams = [];
  const keys = Object.entries(robot);

  for (const key of keys) {
    arrOfParams.push(key.reverse());
  };

  const obj = Object.fromEntries(arrOfParams);

  const keysLength = Object.keys(obj).length;
  const valuesLength = Object.values(robot).length;

  return keysLength < valuesLength ? null : obj;
}

module.exports = inverseRobot;
