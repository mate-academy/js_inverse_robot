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
  const arr1 = Object.keys(robot);
  const arr2 = Object.values(robot);

  for (let x = 0; x < arr1.length; x++) {
    if (arr1.indexOf(arr1[x]) !== arr1.lastIndexOf(arr1[x])) {
      return null;
    }
  }

  for (let x = 0; x < arr2.length; x++) {
    if (arr2.indexOf(arr2[x]) !== arr2.lastIndexOf(arr2[x])) {
      return null;
    }
  }

  const revers = {};

  for (let i = 0; i < arr1.length; i++) {
    revers[arr2[i]] = arr1[i];
  }

  return revers;
}

module.exports = inverseRobot;
