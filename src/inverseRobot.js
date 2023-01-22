'use strict';

/*
 * @param {object} robot
 *
 * @return {object}
*/

function inverseRobot(robot) {
  const ret = {};

  const values = Object.values(robot);

  Object.keys(robot).forEach(key => {
    ret[robot[key]] = key;
  });

  const valuesOfRet = Object.values(ret);

  if (valuesOfRet.length < values.length) {
    return null;
  }

  return ret;
}

module.exports = inverseRobot;
