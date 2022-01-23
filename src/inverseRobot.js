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
function inverseRobot(robot) {
  const mirrorRobot = {};
  const values = Object.values(robot);
  let arr1 = [];
  let arr2 = [];

  for (let i = 0; i < values.length; i++) {
    arr1 = values.slice(0, i);
    arr2 = values.slice(i + 1);

    if (arr1.includes(values[i]) || arr2.includes(values[i])) {
      return null;
    }
  }

  for (const keys in robot) {
    mirrorRobot[robot[keys]] = keys;
  }

  return mirrorRobot;
}

module.exports = inverseRobot;
