'use strict';

/**
 * Situs inversus
 * Transposition of internal organs is a variant of internal anatomy, when
 * the organs are located in a mirror image.
 * Something similar happened to our robot Kolli. His keys became values,
 * and values became keys. Help to repair the robot. Create a 'inverseRobot'
 * function that takes 'robot' as a parameter and returns a new object in which
 * keys will change places with values.
 *
 * If any of the object values are repeated, return 'null'.
 *
 * Example:
 *
 * const kolli = { Kolli: 'name', 123: 'chipVer', 3: 'wheels' };
 * const robert = { Robert: 'name', 123: 'chipVer', 113: 'chipVer' };
 * inverseRobot(robert) === null
 * inverseRobot(kolli) === { name: 'Kolli', chipVer: '123', wheels: '3' }
 *
 *
 * @param {object} robot
 *
 * @return {object}
 */

function valuesRepeatCheck(checkedObject) {
  const check = {};

  for (const key in checkedObject) {
    if (!check[checkedObject[key]]) {
      check[checkedObject[key]] = 0;
    }

    check[checkedObject[key]]++;

    if (check[checkedObject[key]] > 1) {
      return true;
    }
  }

  return false;
}

function inverseRobot(robot) {
  // write code here
  if (valuesRepeatCheck(robot)) {
    return null;
  }

  const repairRobot = {};

  for (const key in robot) {
    repairRobot[robot[key]] = key;
  }

  return repairRobot;
}

module.exports = inverseRobot;
