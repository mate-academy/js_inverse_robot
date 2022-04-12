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
  // write code here
  let count = 0;
  const revers = {};

  for (const j in robot) {
    // console.log(kolli[j]);
    for (const k in robot) {
      // console.log(kolli[k]);
      if (robot[j] === robot[k]) {
        count++;
      }
    }
  }

  // console.log(count)
  if (count > Object.values(robot).length) {
    return null;
  }

  for (const k in robot) {
    // console.log(kolli[k])
    // console.log(kolli[k], k)
    revers[robot[k]] = k;
  }

  return revers;
}

module.exports = inverseRobot;
