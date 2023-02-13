'use strict';

/*
 * @param {object} robot
 *
 * @return {object}
 */

function inverseRobot(robot) {
  const copy = {};
  const arrKey = [];
  const arrVal = [];

  for (const key in robot) {
    arrKey.unshift(key);
    arrVal.unshift(robot[key]);
  }

  for (let i = 0; i < arrKey.length; i++) {
    copy[arrVal[i]] = arrKey[i];
  }

  if (Object.keys(robot).length !== Object.keys(copy).length) {
    return null;
  }

  return copy;
}

module.exports = inverseRobot;
