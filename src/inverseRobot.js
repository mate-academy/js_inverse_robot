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
  const rb1 = Object.keys(robot);
  const rb2 = Object.values(robot);
  const obj = {};

  for (let i = 0; i < rb1.length; i++) {
    for (let g = i + 1; g < rb1.length; g++) {
      if (rb1[i] === rb1[g] || rb2[i] === rb2[g]) {
        return null;
      }
    }
    obj[rb2[i]] = rb1[i];
  }

  return obj;
}

module.exports = inverseRobot;
